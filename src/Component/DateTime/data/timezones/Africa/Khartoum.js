export default (() => {
    let o;
    return Jymfony.Component.VarExporter.Internal.Hydrator.hydrate(
        o = [
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.RuleSet')).newInstanceWithoutConstructor(),
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
                    ],
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1970,
                    ['2']: 1970,
                    ['3']: 1971,
                    ['4']: 1972,
                },
                ['_toYear']: {
                    ['1']: 1970,
                    ['2']: 1985,
                    ['3']: 1971,
                    ['4']: 1985,
                },
                ['_inMonth']: {
                    ['1']: 5,
                    ['2']: 10,
                    ['3']: 4,
                    ['4']: 4,
                },
                ['_on']: {
                    ['1']: '1',
                    ['2']: '15',
                    ['3']: '30',
                    ['4']: 'last sun %s',
                },
                ['_at']: {
                    ['1']: '0:00',
                    ['2']: '0:00',
                    ['3']: '0:00',
                    ['4']: '0:00',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 3600,
                    ['4']: 3600,
                },
                ['_letters']: {
                    ['1']: 'S',
                    ['2']: '-',
                    ['3']: 'S',
                    ['4']: 'S',
                },
            },
        },
        [
            {
                ['offset']: 7808,
                ['dst']: false,
                ['abbrev']: 'LMT',
                ['until']: -1230775808,
                ['format']: 'LMT',
            },
            {
                ['until']: 947930400,
                ['ruleSet']: o[0],
                ['offset']: 7200,
                ['abbrev']: 'CA%sT',
            },
            {
                ['offset']: 10800,
                ['dst']: false,
                ['abbrev']: 'EAT',
                ['until']: 1509483600,
                ['format']: 'EAT',
            },
            {
                ['offset']: 7200,
                ['dst']: false,
                ['abbrev']: 'CAT',
                ['until']: Infinity,
                ['format']: 'CAT',
            },
        ],
        []
    );
})();
;
