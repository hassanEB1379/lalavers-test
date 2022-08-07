export interface SignUpFormFields {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    countryCode: string;
}

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
