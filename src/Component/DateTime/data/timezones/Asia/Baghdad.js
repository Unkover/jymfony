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
                        o[6],
                        o[7],
                        o[8],
                    ],
                },
                ['_cache']: {
                    ['0']: {},
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1982,
                    ['2']: 1982,
                    ['3']: 1983,
                    ['4']: 1984,
                    ['5']: 1985,
                    ['6']: 1986,
                    ['7']: 1991,
                    ['8']: 1991,
                },
                ['_toYear']: {
                    ['1']: 1982,
                    ['2']: 1984,
                    ['3']: 1983,
                    ['4']: 1985,
                    ['5']: 1990,
                    ['6']: 1990,
                    ['7']: 2007,
                    ['8']: 2007,
                },
                ['_inMonth']: {
                    ['1']: 5,
                    ['2']: 10,
                    ['3']: 3,
                    ['4']: 4,
                    ['5']: 9,
                    ['6']: 3,
                    ['7']: 4,
                    ['8']: 10,
                },
                ['_on']: {
                    ['1']: '1',
                    ['2']: '1',
                    ['3']: '31',
                    ['4']: '1',
                    ['5']: 'last sun %s',
                    ['6']: 'last sun %s',
                    ['7']: '1',
                    ['8']: '1',
                },
                ['_at']: {
                    ['1']: '0:00',
                    ['2']: '0:00',
                    ['3']: '0:00',
                    ['4']: '0:00',
                    ['5']: '1:00s',
                    ['6']: '1:00s',
                    ['7']: '3:00s',
                    ['8']: '3:00s',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 3600,
                    ['4']: 3600,
                    ['5']: 0,
                    ['6']: 3600,
                    ['7']: 3600,
                    ['8']: 0,
                },
                ['_letters']: {
                    ['1']: '-',
                    ['2']: '-',
                    ['3']: '-',
                    ['4']: '-',
                    ['5']: '-',
                    ['6']: '-',
                    ['7']: '-',
                    ['8']: '-',
                },
                ['_cache']: {
                    ['1']: {},
                    ['2']: {},
                    ['3']: {},
                    ['4']: {},
                    ['5']: {},
                    ['6']: {},
                    ['7']: {},
                    ['8']: {},
                },
            },
        },
        [
            {
                ['offset']: 10660,
                ['dst']: false,
                ['abbrev']: 'LMT',
                ['until']: -2524532260,
                ['format']: 'LMT',
            },
            {
                ['offset']: 10656,
                ['dst']: false,
                ['abbrev']: 'BMT',
                ['until']: -1641005856,
                ['format']: 'BMT',
            },
            {
                ['offset']: 10800,
                ['dst']: false,
                ['abbrev']: '+03',
                ['until']: 389048400,
                ['format']: '+03',
            },
            {
                ['until']: Infinity,
                ['ruleSet']: o[0],
                ['offset']: 10800,
                ['abbrev']: '+03/+04',
            },
        ],
        [
            0,
        ]
    );
})();
;