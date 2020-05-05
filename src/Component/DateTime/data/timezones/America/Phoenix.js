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
                        o[9],
                        o[10],
                        o[11],
                        o[12],
                        o[13],
                    ],
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1918,
                    ['2']: 1918,
                    ['3']: 1942,
                    ['4']: 1945,
                    ['5']: 1945,
                    ['6']: 1967,
                    ['7']: 1967,
                    ['8']: 1974,
                    ['9']: 1975,
                    ['10']: 1976,
                    ['11']: 1987,
                    ['12']: 2007,
                    ['13']: 2007,
                },
                ['_toYear']: {
                    ['1']: 1919,
                    ['2']: 1919,
                    ['3']: 1942,
                    ['4']: 1945,
                    ['5']: 1945,
                    ['6']: 2006,
                    ['7']: 1973,
                    ['8']: 1974,
                    ['9']: 1975,
                    ['10']: 1986,
                    ['11']: 2006,
                    ['12']: Infinity,
                    ['13']: Infinity,
                },
                ['_inMonth']: {
                    ['1']: 3,
                    ['2']: 10,
                    ['3']: 2,
                    ['4']: 8,
                    ['5']: 9,
                    ['6']: 10,
                    ['7']: 4,
                    ['8']: 1,
                    ['9']: 2,
                    ['10']: 4,
                    ['11']: 4,
                    ['12']: 3,
                    ['13']: 11,
                },
                ['_on']: {
                    ['1']: 'last sun %s',
                    ['2']: 'last sun %s',
                    ['3']: '9',
                    ['4']: '14',
                    ['5']: '30',
                    ['6']: 'last sun %s',
                    ['7']: 'last sun %s',
                    ['8']: '6',
                    ['9']: 'last sun %s',
                    ['10']: 'last sun %s',
                    ['11']: '1 %s this sun',
                    ['12']: '8 %s this sun',
                    ['13']: '1 %s this sun',
                },
                ['_at']: {
                    ['1']: '2:00',
                    ['2']: '2:00',
                    ['3']: '2:00',
                    ['4']: '23:00u',
                    ['5']: '2:00',
                    ['6']: '2:00',
                    ['7']: '2:00',
                    ['8']: '2:00',
                    ['9']: '2:00',
                    ['10']: '2:00',
                    ['11']: '2:00',
                    ['12']: '2:00',
                    ['13']: '2:00',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 3600,
                    ['4']: 3600,
                    ['5']: 0,
                    ['6']: 0,
                    ['7']: 3600,
                    ['8']: 3600,
                    ['9']: 3600,
                    ['10']: 3600,
                    ['11']: 3600,
                    ['12']: 3600,
                    ['13']: 0,
                },
                ['_letters']: {
                    ['1']: 'D',
                    ['2']: 'S',
                    ['3']: 'W',
                    ['4']: 'P',
                    ['5']: 'S',
                    ['6']: 'S',
                    ['7']: 'D',
                    ['8']: 'D',
                    ['9']: 'D',
                    ['10']: 'D',
                    ['11']: 'D',
                    ['12']: 'D',
                    ['13']: 'S',
                },
            },
        },
        [
            {
                ['offset']: -26898,
                ['dst']: false,
                ['abbrev']: 'LMT',
                ['until']: -2717643600,
                ['format']: 'LMT',
            },
            {
                ['until']: -820519140,
                ['ruleSet']: o[0],
                ['offset']: -25200,
                ['abbrev']: 'M%sT',
            },
            {
                ['offset']: -25200,
                ['dst']: false,
                ['abbrev']: 'MST',
                ['until']: -812653140,
                ['format']: 'MST',
            },
            {
                ['until']: -796845540,
                ['ruleSet']: o[0],
                ['offset']: -25200,
                ['abbrev']: 'M%sT',
            },
            {
                ['offset']: -25200,
                ['dst']: false,
                ['abbrev']: 'MST',
                ['until']: -94669200,
                ['format']: 'MST',
            },
            {
                ['until']: -56221200,
                ['ruleSet']: o[0],
                ['offset']: -25200,
                ['abbrev']: 'M%sT',
            },
            {
                ['offset']: -25200,
                ['dst']: false,
                ['abbrev']: 'MST',
                ['until']: Infinity,
                ['format']: 'MST',
            },
        ],
        []
    );
})();
;
