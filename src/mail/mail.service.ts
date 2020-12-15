import got from "got";
import * as FormData from "form-data";
import { EmailVar, MailModuleOptions } from './mail.interfaces';
import { CONFIG_OPTIONS } from './../common/common.constants';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(@Inject(CONFIG_OPTIONS) private readonly options: MailModuleOptions) {
        
    }

    private async sendEmail(to: string, subject:string, template: string, emailVar:EmailVar[]) {
        const form = new FormData();
        form.append('from', `JY From Nuber Eats <mailgun@${this.options.domain}>`);
        form.append('to', to);
        form.append('subject', subject);
        form.append('template', template);
        emailVar.forEach(eVar => form.append(`v:${eVar.key}`, eVar.value));
        try {
            const response = await got(`https://api.mailgun.net/v3/${this.options.domain}/messages`, {
                method: "POST",
                headers: {
                    Authorization: `Basic ${Buffer.from(
                        `api:${this.options.apiKey}`,
                    ).toString('base64')}`,
                },
                body: form,
            }); 
        } catch (error) {
            console.log(error);
        }

    }

    sendVerificationEmail(email:string, code: string) {
        this.sendEmail('roghabo@gmail.com', 'Verify Your Email', 'nuber-eats', [
            {key: 'code', value: code},
            {key: 'username', value: email},
        ])
    }
    
}





