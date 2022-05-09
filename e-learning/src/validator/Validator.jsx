
export const emailValidator=email=>{
    const emailregex = /^[^\s@]+@[^\s@]+$/;
    return emailregex.test(email);
}

export const passwordValidator=password=>{
    const passwordregex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return passwordregex.test(password);

}