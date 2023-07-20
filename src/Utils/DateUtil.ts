import Dict = NodeJS.Dict;


// @ts-ignore
export const numberToMonth: Dict<number, string> = {
    1: 'Gennaio',
    2: 'Febbraio',
    3: 'Marzo',
    4: 'Aprile',
    5: 'Maggio',
    6: 'Giugno',
    7: 'Luglio',
    8: 'Agosto',
    9: 'Settembre',
    10: 'Ottobre',
    11: 'Novembre',
    12: 'Dicembre'
}

// @ts-ignore
export const monthToNumber: Dict<string, number> = {
    'Gennaio': 1,
    'Febbraio': 2,
    'Marzo': 3,
    'Aprile': 4,
    'Maggio': 5,
    'Giugno': 6,
    'Luglio': 7,
    'Agosto': 8,
    'Settembre': 9,
    'Ottobre': 10,
    'Novembre': 11,
    'Dicembre': 12
}

export const getNextMonth = (month: string): string => {
    const monthNumber = monthToNumber[month];
    if (monthNumber === 12) {
        return numberToMonth[1];
    }
    return numberToMonth[monthNumber + 1];
}

export const getPreviousMonth = (month: string): string => {
    const monthNumber = monthToNumber[month];
    if (monthNumber === 1) {
        return numberToMonth[12];
    }
    return numberToMonth[monthNumber - 1];
}