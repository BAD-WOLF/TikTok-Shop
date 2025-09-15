import {ReactElement} from "react";

export const formatCurrencyWithClass: (currency: string, value: string|number) => ReactElement = (
    currency: string,
    value: string|number
): ReactElement => {
    if (currency === 'R$') {
        return (
            <span className="font-price">{currency} <span className="font-sans">{value}</span></span>
        );
    } else {
        <span className="font-price"><span className="font-sans">{value}</span></span>
    }
    return (
        <span className="font-price">{currency}<span className="font-sans">{value}</span></span>
    );
};
