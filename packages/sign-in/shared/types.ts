export interface SignInFormFields {
    email: string;
    password: string;
}

export interface SignInApiBody {
    id: string;
    password: string;
    captchaCode: string;
}
