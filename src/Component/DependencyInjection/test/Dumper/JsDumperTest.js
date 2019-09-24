const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
require('../../fixtures/namespace');

const ContainerBuilder = Jymfony.Component.DependencyInjection.ContainerBuilder;
const ContainerInterface = Jymfony.Component.DependencyInjection.ContainerInterface;
const ServiceClosureArgument = Jymfony.Component.DependencyInjection.Argument.ServiceClosureArgument;
const Definition = Jymfony.Component.DependencyInjection.Definition;
const JsDumper = Jymfony.Component.DependencyInjection.Dumper.JsDumper;
const Fixtures = Jymfony.Component.DependencyInjection.Fixtures;
const ParameterBag = Jymfony.Component.DependencyInjection.ParameterBag.ParameterBag;
const Reference = Jymfony.Component.DependencyInjection.Reference;
const ServiceLocator = Jymfony.Component.DependencyInjection.ServiceLocator;
const Variable = Jymfony.Component.DependencyInjection.Variable;
const fixturesPath = path.join(__dirname, '..', '..', 'fixtures');

describe('[DependencyInjection] JsDumper', function () {
    it('dump', () => {
        const container = new ContainerBuilder();
        container.compile();

        const dumper = new JsDumper(container);
        expect(dumper.dump({ build_time: 1536621245 })).to.be.deep.equal({
            'ContainerkHWy2bx/ProjectContainer.js': fs.readFileSync(path.join(fixturesPath, 'js', 'services1.js')).toString(),
            'ProjectContainer.js': `
// This file has been auto-generated by the Jymfony Dependency Injection Component for internal use.
const ContainerkHWy2bx = require('./ContainerkHWy2bx/ProjectContainer.js');

module.exports = new ContainerkHWy2bx({
    'container.build_hash': 'kHWy2bx',
    'container.build_id': '1285839777',
    'container.build_time': 1536621245,
});

`,
        });
        expect(dumper.dump({ class_name: 'DumpedContainer', base_class: 'AbstractContainer' })['ContainerEexe5Ot/DumpedContainer.js'])
            .to.be.equal(fs.readFileSync(path.join(fixturesPath, 'js', 'services1-1.js')).toString());
    });

    it('dump optimization string', () => {
        const definition = new Definition();
        definition.setClass('Object');
        definition.setPublic(true);
        definition.addArgument({
            'only dot': '.',
            'concatenation as value': '+""+',
            'concatenation from the start value': '""+',
            '.': 'dot as a key',
            '+""+': 'concatenation as a key',
            '""+': 'concatenation from the start key',
            'optimize concatenation': 'string1%some_string%string2',
            'optimize concatenation with empty string': 'string1%empty_value%string2',
            'optimize concatenation from the start': '%empty_value%start',
            'optimize concatenation at the end': 'end%empty_value%',
        });

        const container = new ContainerBuilder();
        container.setResourceTracking(false);
        container.setDefinition('test', definition);
        container.setParameter('empty_value', '');
        container.setParameter('some_string', '-');
        container.compile();

        const dumper = new JsDumper(container);
        expect(dumper.dump({ build_time: 1536621245 })['ContainerDw9sVw7/ProjectContainer.js'])
            .to.be.equal(fs.readFileSync(path.join(fixturesPath, 'js', 'services10.js')).toString());
    });

    const tests = function * () {
        yield {'foo': new Definition('Object')};
        yield {'foo': new Reference('foo')};
        yield {'foo': new Variable('foo')};
    };
    let count = 0;

    for (const t of tests()) {
        it('should throw if invalid parameters are passed #'+count++, () => {
            const container = new ContainerBuilder(new ParameterBag(t));
            container.compile();

            const dumper = new JsDumper(container);
            expect(() => dumper.dump()).to.throw(InvalidArgumentException);
        });
    }

    it('should add parameters', () => {
        const container = require(path.join(fixturesPath, 'containers', 'container8.js'));
        container.compile();

        const dumper = new JsDumper(container);
        expect(dumper.dump({ build_time: 1536621245 })['ContainerbFqdJN6/ProjectContainer.js'])
            .to.be.equal(fs.readFileSync(path.join(fixturesPath, 'js', 'services8.js')).toString());
    });

    it('should add services', () => {
        const container = require(path.join(fixturesPath, 'containers', 'container9.js'));
        container.compile();

        const dumper = new JsDumper(container);
        expect(dumper.dump({ build_time: 1536621245 })['ContainerahGASul/ProjectContainer.js'])
            .to.be.equal(fs.readFileSync(path.join(fixturesPath, 'js', 'services9.js')).toString());
    });

    it('should handle env parameters', () => {
        const container = require(path.join(fixturesPath, 'containers', 'container-env.js'));
        container.compile();

        const dumper = new JsDumper(container);
        expect(dumper.dump({ build_time: 1536621245 })['Container15Bk9yA/ProjectContainer.js'])
            .to.be.equal(fs.readFileSync(path.join(fixturesPath, 'js', 'services-env.js')).toString());
    });

    it('should handle factories inclusion', () => {
        const container = require(path.join(fixturesPath, 'containers', 'container14.js'));
        container.compile();

        const dumper = new JsDumper(container);
        expect(dumper.dump({ build_time: 1536621245 })['ContainerHk8K7Jr/ProjectContainer.js'])
            .to.be.equal(fs.readFileSync(path.join(fixturesPath, 'js', 'services14.js')).toString());
    });

    it('should handle module inclusion', () => {
        const container = require(path.join(fixturesPath, 'containers', 'container15.js'));
        container.compile();

        const dumper = new JsDumper(container);
        expect(dumper.dump({ build_time: 1536621245 })['Containerhr7szKm/ProjectContainer.js'])
            .to.be.equal(fs.readFileSync(path.join(fixturesPath, 'js', 'services15.js')).toString());
    });

    it('should handle service locators', () => {
        const container = new ContainerBuilder();
        let nil;

        container.register('foo_service', ServiceLocator)
            .setPublic(true)
            .addArgument({
                'bar': new ServiceClosureArgument(new Reference('bar_service')),
                'baz': new ServiceClosureArgument(new Reference('baz_service', 'stdClass')),
                'nil': nil = new ServiceClosureArgument(new Reference('nil')),
            })
        ;

        // No method calls
        container.register('translator.loader_1', 'stdClass').setPublic(true);
        container.register('translator.loader_1_locator', ServiceLocator)
            .setPublic(false)
            .addArgument({
                'translator.loader_1': new ServiceClosureArgument(new Reference('translator.loader_1')),
            });
        container.register('translator_1', Fixtures.StubbedTranslator)
            .setPublic(true)
            .addArgument(new Reference('translator.loader_1_locator'));

        // One method calls
        container.register('translator.loader_2', 'stdClass').setPublic(true);
        container.register('translator.loader_2_locator', ServiceLocator)
            .setPublic(false)
            .addArgument({
                'translator.loader_2': new ServiceClosureArgument(new Reference('translator.loader_2')),
            });

        container.register('translator_2', Fixtures.StubbedTranslator)
            .setPublic(true)
            .addArgument(new Reference('translator.loader_2_locator'))
            .addMethodCall('addResource', [ 'db', new Reference('translator.loader_2'), 'nl' ]);

        // Two method calls
        container.register('translator.loader_3', 'stdClass').setPublic(true);
        container.register('translator.loader_3_locator', ServiceLocator)
            .setPublic(false)
            .addArgument({
                'translator.loader_3': new ServiceClosureArgument(new Reference('translator.loader_3')),
            });
        container.register('translator_3', Fixtures.StubbedTranslator)
            .setPublic(true)
            .addArgument(new Reference('translator.loader_3_locator'))
            .addMethodCall('addResource', [ 'db', new Reference('translator.loader_3'), 'nl' ])
            .addMethodCall('addResource', [ 'db', new Reference('translator.loader_3'), 'en' ]);

        nil.values = [ undefined ];
        container.register('bar_service', 'stdClass').setArguments([ new Reference('baz_service') ]).setPublic(true);
        container.register('baz_service', 'stdClass').setPublic(false);
        container.compile();

        const dumper = new JsDumper(container);

        expect(dumper.dump({ build_time: 1536621245 })['Containerkoj5E9d/ProjectContainer.js'])
            .to.be.equal(fs.readFileSync(path.join(fixturesPath, 'js', 'services-locator.js')).toString());
    });

    it('should handle service subscriber', () => {
        const container = new ContainerBuilder();
        container.register('foo_service', Fixtures.TestServiceSubscriber)
            .setPublic(true)
            .addArgument(new Reference(ContainerInterface))
            .addTag('container.service_subscriber')
        ;

        container.register(Fixtures.TestServiceSubscriber, Fixtures.TestServiceSubscriber).setPublic(true);
        container.register(Fixtures.CustomDefinition, Fixtures.CustomDefinition).setPublic(false);
        container.compile();

        const dumper = new JsDumper(container);

        expect(dumper.dump({ build_time: 1536621245 })['ContainereemDUTS/ProjectContainer.js'])
            .to.be.equal(fs.readFileSync(path.join(fixturesPath, 'js', 'services-subscriber.js')).toString());
    });

    it('should throw if service argument is a function', () => {
        const container = new ContainerBuilder();
        container.register('foo', 'Bar.Foo')
            .setPublic(true)
            .addArgument(function () { });
        container.compile();

        const dumper = new JsDumper(container);
        expect(() => dumper.dump()).to.throw(/Unable to dump a service container if a parameter is a function/);
    });

    it('should throw if service argument is a class', () => {
        const container = new ContainerBuilder();
        container.register('foo', 'Bar.Foo')
            .setPublic(true)
            .addArgument(Jymfony.Component.DependencyInjection.Container);
        container.compile();

        const dumper = new JsDumper(container);
        expect(() => dumper.dump()).to.throw(/Unable to dump a service container if a parameter is a function/);
    });

    it('should load inject and parameter annotations', __jymfony.Platform.hasPublicFieldSupport() ? () => {
        const container = require(path.join(fixturesPath, 'containers', 'annotated-container.js'));
        container.compile();

        const dumper = new JsDumper(container);
        expect(dumper.dump({ build_time: 1536621245 })['Container9d159V4/ProjectContainer.js'])
            .to.be.equal(fs.readFileSync(path.join(fixturesPath, 'js', 'annotated-services.js')).toString());
    } : undefined);
});
