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
        ],
        null,
        {
            'Jymfony.Component.DateTime.Internal.RuleSet': {
                ['_name']: {
                    ['0']: undefined,
                    ['13']: undefined,
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
                    ],
                    ['13']: [
                        o[14],
                        o[15],
                        o[16],
                        o[17],
                        o[18],
                        o[19],
                        o[20],
                        o[21],
                        o[22],
                        o[23],
                    ],
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1918,
                    ['2']: 1918,
                    ['3']: 1919,
                    ['4']: 1919,
                    ['5']: 1942,
                    ['6']: 1945,
                    ['7']: 1945,
                    ['8']: 1965,
                    ['9']: 1965,
                    ['10']: 1980,
                    ['11']: 1980,
                    ['12']: 1987,
                    ['14']: 1918,
                    ['15']: 1918,
                    ['16']: 1942,
                    ['17']: 1945,
                    ['18']: 1945,
                    ['19']: 1974,
                    ['20']: 1974,
                    ['21']: 1987,
                    ['22']: 2007,
                    ['23']: 2007,
                },
                ['_toYear']: {
                    ['1']: 1918,
                    ['2']: 1918,
                    ['3']: 1919,
                    ['4']: 1919,
                    ['5']: 1942,
                    ['6']: 1945,
                    ['7']: 1945,
                    ['8']: 1965,
                    ['9']: 1965,
                    ['10']: 1986,
                    ['11']: 2006,
                    ['12']: 2006,
                    ['14']: 1918,
                    ['15']: 1918,
                    ['16']: 1942,
                    ['17']: 1945,
                    ['18']: 1945,
                    ['19']: 1986,
                    ['20']: 2006,
                    ['21']: 2006,
                    ['22']: Infinity,
                    ['23']: Infinity,
                },
                ['_inMonth']: {
                    ['1']: 4,
                    ['2']: 10,
                    ['3']: 5,
                    ['4']: 11,
                    ['5']: 2,
                    ['6']: 8,
                    ['7']: 9,
                    ['8']: 4,
                    ['9']: 10,
                    ['10']: 4,
                    ['11']: 10,
                    ['12']: 4,
                    ['14']: 4,
                    ['15']: 10,
                    ['16']: 2,
                    ['17']: 8,
                    ['18']: 9,
                    ['19']: 4,
                    ['20']: 10,
                    ['21']: 4,
                    ['22']: 3,
                    ['23']: 11,
                },
                ['_on']: {
                    ['1']: '14',
                    ['2']: '27',
                    ['3']: '25',
                    ['4']: '1',
                    ['5']: '9',
                    ['6']: '14',
                    ['7']: '30',
                    ['8']: 'last sun %s',
                    ['9']: 'last sun %s',
                    ['10']: 'last sun %s',
                    ['11']: 'last sun %s',
                    ['12']: '1 %s this sun',
                    ['14']: '14',
                    ['15']: '27',
                    ['16']: '9',
                    ['17']: '14',
                    ['18']: '30',
                    ['19']: 'last sun %s',
                    ['20']: 'last sun %s',
                    ['21']: '1 %s this sun',
                    ['22']: '8 %s this sun',
                    ['23']: '1 %s this sun',
                },
                ['_at']: {
                    ['1']: '2:00',
                    ['2']: '2:00',
                    ['3']: '2:00',
                    ['4']: '0:00',
                    ['5']: '2:00',
                    ['6']: '23:00u',
                    ['7']: '2:00',
                    ['8']: '0:00',
                    ['9']: '2:00',
                    ['10']: '2:00',
                    ['11']: '2:00',
                    ['12']: '2:00',
                    ['14']: '2:00',
                    ['15']: '2:00',
                    ['16']: '2:00',
                    ['17']: '23:00u',
                    ['18']: '2:00',
                    ['19']: '2:00',
                    ['20']: '2:00',
                    ['21']: '2:00',
                    ['22']: '2:00',
                    ['23']: '2:00',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 3600,
                    ['4']: 0,
                    ['5']: 3600,
                    ['6']: 3600,
                    ['7']: 0,
                    ['8']: 7200,
                    ['9']: 0,
                    ['10']: 3600,
                    ['11']: 0,
                    ['12']: 3600,
                    ['14']: 3600,
                    ['15']: 0,
                    ['16']: 3600,
                    ['17']: 3600,
                    ['18']: 0,
                    ['19']: 3600,
                    ['20']: 0,
                    ['21']: 3600,
                    ['22']: 3600,
                    ['23']: 0,
                },
                ['_letters']: {
                    ['1']: 'D',
                    ['2']: 'S',
                    ['3']: 'D',
                    ['4']: 'S',
                    ['5']: 'W',
                    ['6']: 'P',
                    ['7']: 'S',
                    ['8']: 'DD',
                    ['9']: 'S',
                    ['10']: 'D',
                    ['11']: 'S',
                    ['12']: 'D',
                    ['14']: 'D',
                    ['15']: 'S',
                    ['16']: 'W',
                    ['17']: 'P',
                    ['18']: 'S',
                    ['19']: 'D',
                    ['20']: 'S',
                    ['21']: 'D',
                    ['22']: 'D',
                    ['23']: 'S',
                },
            },
        },
        [
            {
                ['offset']: 0,
                ['dst']: false,
                ['abbrev']: '-00',
                ['until']: -536457600,
                ['format']: '-00',
            },
            {
                ['until']: 1590919200,
                ['ruleSet']: o[0],
                ['offset']: -28800,
                ['abbrev']: 'P%sT',
            },
            {
                ['until']: 315558000,
                ['ruleSet']: o[0],
                ['offset']: -25200,
                ['abbrev']: 'M%sT',
            },
            {
                ['until']: Infinity,
                ['ruleSet']: o[13],
                ['offset']: -25200,
                ['abbrev']: 'M%sT',
            },
        ],
        []
    );
})();
;
