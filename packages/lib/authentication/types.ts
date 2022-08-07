export interface SignUpApiBody {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: {
        number: string;
        countryCode: string;
    };
    password: string;
    captchaCode: string;
}

export interface SignInApiBody {
    id: string;
    password: string;
    captchaCode: string;
}
