function declOfNumOnlyText(n: number, text_forms: Array<string>) {
    const n2 = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n2 > 10 && n2 < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}

export default declOfNumOnlyText
