const Application = Jymfony.Console.Application;
const Command = Jymfony.Console.Command.Command;
const DescriptorInterface = Jymfony.Console.Descriptor.DescriptorInterface;
const InputArgument = Jymfony.Console.Input.InputArgument;
const InputOption = Jymfony.Console.Input.InputOption;
const InputDefinition = Jymfony.Console.Input.InputDefinition;
const OutputInterface = Jymfony.Console.Output.OutputInterface;

/**
 * @memberOf Jymfony.Console.Descriptor
 * @type Descriptor
 */
module.exports = class Descriptor extends implementationOf(DescriptorInterface) {
    /**
     * @inheritDoc
     */
    describe(output, object, options = {}) {
        this._output = output;

        switch (true) {
            case object instanceof InputArgument:
                this.describeInputArgument(object, options);
                break;

            case object instanceof InputOption:
                this.describeInputOption(object, options);
                break;

            case object instanceof InputDefinition:
                this.describeInputDefinition(object, options);
                break;

            case object instanceof Command:
                this.describeCommand(object, options);
                break;

            case object instanceof Application:
                this.describeApplication(object, options);
                break;

            default:
                throw new InvalidArgumentException(`Object of type "${(new ReflectionClass(object)).name}" is not describable.`);
        }
    }

    /**
     * Writes content to output.
     *
     * @param {string} content
     * @param {boolean} decorated
     *
     * @protected
     */
    _write(content, decorated = false) {
        this._output.write(content, false, decorated ? OutputInterface.OUTPUT_NORMAL : OutputInterface.OUTPUT_RAW);
    }

    /**
     * Describes an InputArgument instance.
     *
     * @param {Jymfony.Console.Input.InputArgument} argument
     * @param {*} options
     *
     * @returns {string|*}
     *
     * @protected
     * @abstract
     */
    describeInputArgument(argument, options = {}) {
        throw new Error('describeInputArgument must be overridden');
    }

    /**
     * Describes an InputOption instance.
     *
     * @param {Jymfony.Console.Input.InputOption} option
     * @param {*} options
     *
     * @returns {string|*}
     *
     * @protected
     * @abstract
     */
    describeInputOption(option, options = {}) {
        throw new Error('describeInputOption must be overridden');
    }

    /**
     * Describes an InputDefinition instance.
     *
     * @param {Jymfony.Console.Input.InputDefinition} definition
     * @param {*} options
     *
     * @returns {string|*}
     *
     * @protected
     * @abstract
     */
    describeInputDefinition(definition, options = {}) {
        throw new Error('describeInputOption must be overridden');
    }

    /**
     * Describes a Command instance.
     *
     * @param {Jymfony.Console.Command.Command} command
     * @param {*} options
     *
     * @returns {string|*}
     *
     * @protected
     * @abstract
     */
    describeCommand(command, options = {}) {
        throw new Error('describeInputOption must be overridden');
    }

    /**
     * Describes an Application instance.
     *
     * @param {Jymfony.Console.Application} application
     * @param {*} options
     *
     * @returns {string|*}
     *
     * @protected
     * @abstract
     */
    describeApplication(application, options = {}) {
        throw new Error('describeInputOption must be overridden');
    }
};