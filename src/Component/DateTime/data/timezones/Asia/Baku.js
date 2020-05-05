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
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.RuleSet')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.RuleSet')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
        ],
        null,
        {
            'Jymfony.Component.DateTime.Internal.RuleSet': {
                ['_name']: {
                    ['0']: undefined,
                    ['6']: undefined,
                    ['10']: undefined,
                },
                ['_rules']: {
                    ['0']: [
                        o[1],
                        o[2],
                        o[3],
                        o[4],
                        o[5],
                    ],
                    ['6']: [
                        o[7],
                        o[8],
                        o[9],
                    ],
                    ['10']: [
                        o[11],
                        o[12],
                    ],
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1981,
                    ['2']: 1981,
                    ['3']: 1984,
                    ['4']: 1985,
                    ['5']: 1996,
                    ['7']: 1981,
                    ['8']: 1979,
                    ['9']: 1996,
                    ['11']: 1997,
                    ['12']: 1997,
                },
                ['_toYear']: {
                    ['1']: 1984,
                    ['2']: 1983,
                    ['3']: 1995,
                    ['4']: 2010,
                    ['5']: 2010,
                    ['7']: Infinity,
                    ['8']: 1995,
                    ['9']: Infinity,
                    ['11']: 2015,
                    ['12']: 2015,
                },
                ['_inMonth']: {
                    ['1']: 4,
                    ['2']: 10,
                    ['3']: 9,
                    ['4']: 3,
                    ['5']: 10,
                    ['7']: 3,
                    ['8']: 9,
                    ['9']: 10,
                    ['11']: 3,
                    ['12']: 10,
                },
                ['_on']: {
                    ['1']: '1',
                    ['2']: '1',
                    ['3']: 'last sun %s',
                    ['4']: 'last sun %s',
                    ['5']: 'last sun %s',
                    ['7']: 'last sun %s',
                    ['8']: 'last sun %s',
                    ['9']: 'last sun %s',
                    ['11']: 'last sun %s',
                    ['12']: 'last sun %s',
                },
                ['_at']: {
                    ['1']: '0:00',
                    ['2']: '0:00',
                    ['3']: '2:00s',
                    ['4']: '2:00s',
                    ['5']: '2:00s',
                    ['7']: '1:00u',
                    ['8']: '1:00u',
                    ['9']: '1:00u',
                    ['11']: '4:00',
                    ['12']: '5:00',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 0,
                    ['4']: 3600,
                    ['5']: 0,
                    ['7']: 3600,
                    ['8']: 0,
                    ['9']: 0,
                    ['11']: 3600,
                    ['12']: 0,
                },
                ['_letters']: {
                    ['1']: '-',
                    ['2']: '-',
                    ['3']: '-',
                    ['4']: '-',
                    ['5']: '-',
                    ['7']: 'S',
                    ['8']: '-',
                    ['9']: '-',
                    ['11']: '-',
                    ['12']: '-',
                },
            },
        },
        [
            {
                ['offset']: 11964,
                ['dst']: false,
                ['abbrev']: 'LMT',
                ['until']: -1441163964,
                ['format']: 'LMT',
            },
            {
                ['offset']: 10800,
                ['dst']: false,
                ['abbrev']: '+03',
                ['until']: -405140400,
                ['format']: '+03',
            },
            {
                ['until']: 670370400,
                ['ruleSet']: o[0],
                ['offset']: 14400,
                ['abbrev']: '+04/+05',
            },
            {
                ['until']: 1590879600,
                ['ruleSet']: o[0],
                ['offset']: 10800,
                ['abbrev']: '+03/+04',
            },
            {
                ['offset']: 14400,
                ['dst']: false,
                ['abbrev']: '+04',
                ['until']: 820440000,
                ['format']: '+04',
            },
            {
                ['until']: 852062400,
                ['ruleSet']: o[6],
                ['offset']: 14400,
                ['abbrev']: '+04/+05',
            },
            {
                ['until']: Infinity,
                ['ruleSet']: o[10],
                ['offset']: 14400,
                ['abbrev']: '+04/+05',
            },
        ],
        []
    );
})();
;
