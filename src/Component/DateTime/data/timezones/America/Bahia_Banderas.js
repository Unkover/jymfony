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
                        o[14],
                    ],
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1939,
                    ['2']: 1939,
                    ['3']: 1940,
                    ['4']: 1941,
                    ['5']: 1943,
                    ['6']: 1944,
                    ['7']: 1950,
                    ['8']: 1950,
                    ['9']: 1996,
                    ['10']: 1996,
                    ['11']: 2001,
                    ['12']: 2001,
                    ['13']: 2002,
                    ['14']: 2002,
                },
                ['_toYear']: {
                    ['1']: 1939,
                    ['2']: 1939,
                    ['3']: 1940,
                    ['4']: 1941,
                    ['5']: 1943,
                    ['6']: 1944,
                    ['7']: 1950,
                    ['8']: 1950,
                    ['9']: 2000,
                    ['10']: 2000,
                    ['11']: 2001,
                    ['12']: 2001,
                    ['13']: Infinity,
                    ['14']: Infinity,
                },
                ['_inMonth']: {
                    ['1']: 2,
                    ['2']: 6,
                    ['3']: 12,
                    ['4']: 4,
                    ['5']: 12,
                    ['6']: 5,
                    ['7']: 2,
                    ['8']: 7,
                    ['9']: 4,
                    ['10']: 10,
                    ['11']: 5,
                    ['12']: 9,
                    ['13']: 4,
                    ['14']: 10,
                },
                ['_on']: {
                    ['1']: '5',
                    ['2']: '25',
                    ['3']: '9',
                    ['4']: '1',
                    ['5']: '16',
                    ['6']: '1',
                    ['7']: '12',
                    ['8']: '30',
                    ['9']: '1 %s this sun',
                    ['10']: 'last sun %s',
                    ['11']: '1 %s this sun',
                    ['12']: 'last sun %s',
                    ['13']: '1 %s this sun',
                    ['14']: 'last sun %s',
                },
                ['_at']: {
                    ['1']: '0:00',
                    ['2']: '0:00',
                    ['3']: '0:00',
                    ['4']: '0:00',
                    ['5']: '0:00',
                    ['6']: '0:00',
                    ['7']: '0:00',
                    ['8']: '0:00',
                    ['9']: '2:00',
                    ['10']: '2:00',
                    ['11']: '2:00',
                    ['12']: '2:00',
                    ['13']: '2:00',
                    ['14']: '2:00',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 3600,
                    ['4']: 0,
                    ['5']: 3600,
                    ['6']: 0,
                    ['7']: 3600,
                    ['8']: 0,
                    ['9']: 3600,
                    ['10']: 0,
                    ['11']: 3600,
                    ['12']: 0,
                    ['13']: 3600,
                    ['14']: 0,
                },
                ['_letters']: {
                    ['1']: 'D',
                    ['2']: 'S',
                    ['3']: 'D',
                    ['4']: 'S',
                    ['5']: 'W',
                    ['6']: 'S',
                    ['7']: 'D',
                    ['8']: 'S',
                    ['9']: 'D',
                    ['10']: 'S',
                    ['11']: 'D',
                    ['12']: 'S',
                    ['13']: 'D',
                    ['14']: 'S',
                },
            },
        },
        [
            {
                ['offset']: -25260,
                ['dst']: false,
                ['abbrev']: 'LMT',
                ['until']: -1514739600,
                ['format']: 'LMT',
            },
            {
                ['offset']: -25200,
                ['dst']: false,
                ['abbrev']: 'MST',
                ['until']: -1343066400,
                ['format']: 'MST',
            },
            {
                ['offset']: -21600,
                ['dst']: false,
                ['abbrev']: 'CST',
                ['until']: -1234807200,
                ['format']: 'CST',
            },
            {
                ['offset']: -25200,
                ['dst']: false,
                ['abbrev']: 'MST',
                ['until']: -1220292000,
                ['format']: 'MST',
            },
            {
                ['offset']: -21600,
                ['dst']: false,
                ['abbrev']: 'CST',
                ['until']: -1207159200,
                ['format']: 'CST',
            },
            {
                ['offset']: -25200,
                ['dst']: false,
                ['abbrev']: 'MST',
                ['until']: -1191344400,
                ['format']: 'MST',
            },
            {
                ['offset']: -21600,
                ['dst']: false,
                ['abbrev']: 'CST',
                ['until']: -873828000,
                ['format']: 'CST',
            },
            {
                ['offset']: -25200,
                ['dst']: false,
                ['abbrev']: 'MST',
                ['until']: -661539600,
                ['format']: 'MST',
            },
            {
                ['offset']: -28800,
                ['dst']: false,
                ['abbrev']: 'PST',
                ['until']: 28800,
                ['format']: 'PST',
            },
            {
                ['until']: 1270371600,
                ['ruleSet']: o[0],
                ['offset']: -25200,
                ['abbrev']: 'M%sT',
            },
            {
                ['until']: Infinity,
                ['ruleSet']: o[0],
                ['offset']: -21600,
                ['abbrev']: 'C%sT',
            },
        ],
        []
    );
})();
;
