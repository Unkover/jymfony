export default (() => {
    let o;
    return Jymfony.Component.VarExporter.Internal.Hydrator.hydrate(
        o = [
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.RuleSet')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
        ],
        null,
        {
            'Jymfony.Component.DateTime.Internal.RuleSet': {
                ['_name']: {
                    ['0']: undefined,
                },
                ['_rules']: {
                    ['0']: [
                        o[1],
                        o[2],
                        o[3],
                        o[4],
                        o[5],
                    ],
                },
                ['_cache']: {
                    ['0']: {
                        ['1988']: [
                            o[2],
                            o[3],
                            o[4],
                        ],
                        ['1989']: [
                            o[2],
                            o[3],
                            o[4],
                        ],
                        ['1990']: [
                            o[2],
                            o[3],
                            o[4],
                        ],
                        ['1991']: [
                            o[2],
                            o[3],
                            o[4],
                        ],
                        ['1992']: [
                            o[2],
                            o[3],
                            o[4],
                        ],
                        ['1993']: [
                            o[2],
                            o[3],
                            o[4],
                        ],
                        ['1994']: [
                            o[2],
                            o[3],
                            o[4],
                        ],
                        ['1995']: [
                            o[2],
                            o[3],
                            o[4],
                        ],
                        ['1998']: [
                            o[3],
                            o[4],
                            o[5],
                        ],
                        ['1999']: [
                            o[3],
                            o[4],
                            o[5],
                        ],
                        ['2003']: [
                            o[3],
                            o[4],
                            o[5],
                        ],
                        ['2004']: [
                            o[3],
                            o[4],
                            o[5],
                        ],
                        ['2010']: [
                            o[3],
                            o[4],
                            o[5],
                        ],
                        ['2011']: [
                            o[5],
                        ],
                        ['2019']: [
                            o[5],
                        ],
                        ['2020']: [
                            o[5],
                        ],
                    },
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1981,
                    ['2']: 1981,
                    ['3']: 1984,
                    ['4']: 1985,
                    ['5']: 1996,
                },
                ['_toYear']: {
                    ['1']: 1984,
                    ['2']: 1983,
                    ['3']: 1995,
                    ['4']: 2010,
                    ['5']: 2010,
                },
                ['_inMonth']: {
                    ['1']: 4,
                    ['2']: 10,
                    ['3']: 9,
                    ['4']: 3,
                    ['5']: 10,
                },
                ['_on']: {
                    ['1']: '1',
                    ['2']: '1',
                    ['3']: 'last sun %s',
                    ['4']: 'last sun %s',
                    ['5']: 'last sun %s',
                },
                ['_at']: {
                    ['1']: '0:00',
                    ['2']: '0:00',
                    ['3']: '2:00s',
                    ['4']: '2:00s',
                    ['5']: '2:00s',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 0,
                    ['4']: 3600,
                    ['5']: 0,
                },
                ['_letters']: {
                    ['1']: '-',
                    ['2']: '-',
                    ['3']: '-',
                    ['4']: '-',
                    ['5']: '-',
                },
                ['_cache']: {
                    ['1']: {},
                    ['2']: {
                        ['1983']: [
                            '001983-10-01T00:00:00',
                            '001983-10-01T00:00:00',
                        ],
                    },
                    ['3']: {
                        ['1988']: [
                            '001988-09-25T02:00:00',
                            '001988-09-25T02:00:00',
                        ],
                        ['1989']: [
                            '001989-09-24T02:00:00',
                            '001989-09-24T02:00:00',
                        ],
                        ['1990']: [
                            '001990-09-30T02:00:00',
                            '001990-09-30T02:00:00',
                        ],
                        ['1991']: [
                            '001991-09-29T02:00:00',
                            '001991-09-29T02:00:00',
                        ],
                        ['1992']: [
                            '001992-09-27T02:00:00',
                            '001992-09-27T02:00:00',
                        ],
                        ['1993']: [
                            '001993-09-26T02:00:00',
                            '001993-09-26T02:00:00',
                        ],
                        ['1994']: [
                            '001994-09-25T02:00:00',
                            '001994-09-25T02:00:00',
                        ],
                        ['1995']: [
                            '001995-09-24T02:00:00',
                            '001995-09-24T02:00:00',
                        ],
                    },
                    ['4']: {
                        ['1988']: [
                            '001988-03-27T02:00:00',
                            '001988-03-27T03:00:00',
                        ],
                        ['1989']: [
                            '001989-03-26T02:00:00',
                            '001989-03-26T03:00:00',
                        ],
                        ['1990']: [
                            '001990-03-25T02:00:00',
                            '001990-03-25T03:00:00',
                        ],
                        ['1991']: [
                            '001991-03-31T02:00:00',
                            '001991-03-31T03:00:00',
                        ],
                        ['1992']: [
                            '001992-03-29T02:00:00',
                            '001992-03-29T03:00:00',
                        ],
                        ['1993']: [
                            '001993-03-28T02:00:00',
                            '001993-03-28T03:00:00',
                        ],
                        ['1994']: [
                            '001994-03-27T02:00:00',
                            '001994-03-27T03:00:00',
                        ],
                        ['1995']: [
                            '001995-03-26T02:00:00',
                            '001995-03-26T03:00:00',
                        ],
                        ['1998']: [
                            '001998-03-29T02:00:00',
                            '001998-03-29T03:00:00',
                        ],
                        ['1999']: [
                            '001999-03-28T02:00:00',
                            '001999-03-28T03:00:00',
                        ],
                        ['2003']: [
                            '002003-03-30T02:00:00',
                            '002003-03-30T03:00:00',
                        ],
                        ['2004']: [
                            '002004-03-28T02:00:00',
                            '002004-03-28T03:00:00',
                        ],
                        ['2010']: [
                            '002010-03-28T02:00:00',
                            '002010-03-28T03:00:00',
                        ],
                    },
                    ['5']: {
                        ['1998']: [
                            '001998-10-25T02:00:00',
                            '001998-10-25T02:00:00',
                        ],
                        ['1999']: [
                            '001999-10-31T02:00:00',
                            '001999-10-31T02:00:00',
                        ],
                        ['2003']: [
                            '002003-10-26T02:00:00',
                            '002003-10-26T02:00:00',
                        ],
                        ['2004']: [
                            '002004-10-31T02:00:00',
                            '002004-10-31T02:00:00',
                        ],
                        ['2010']: [
                            '002010-10-31T02:00:00',
                            '002010-10-31T02:00:00',
                        ],
                    },
                },
            },
        },
        [
            {
                ['offset']: 16512,
                ['dst']: false,
                ['abbrev']: 'LMT',
                ['until']: -1441168512,
                ['format']: 'LMT',
            },
            {
                ['offset']: 18000,
                ['dst']: false,
                ['abbrev']: '+05',
                ['until']: -1247547600,
                ['format']: '+05',
            },
            {
                ['until']: 670363200,
                ['ruleSet']: o[0],
                ['offset']: 21600,
                ['abbrev']: '+06/+07',
            },
            {
                ['until']: 684363600,
                ['ruleSet']: undefined,
                ['offset']: 18000,
                ['abbrev']: '+05/+06',
            },
            {
                ['offset']: 18000,
                ['dst']: false,
                ['abbrev']: '+05',
                ['until']: Infinity,
                ['format']: '+05',
            },
        ],
        [
            0,
        ]
    );
})();
;