declare namespace Jymfony.Component.Testing {
    import MethodProphecy = Jymfony.Component.Testing.Prophecy.MethodProphecy;
    import ObjectProphecy = Jymfony.Component.Testing.Prophecy.ObjectProphecy;

    type Prophecy<T> = {
        [P in keyof T]-?: T[P] extends Function ? (...args: any[]) => (T[P] & MethodProphecy) : T[P] & MethodProphecy;
    };

    export class Prophet {
        private _prophecies: ObjectProphecy[];

        /**
         * Constructor.
         */
        __construct(): void;
        constructor();

        /**
         * Creates new object prophecy.
         */
        prophesize<T>(classOrInterface?: Newable<T>): ObjectProphecy<T> & Prophecy<T>;
        prophesize(classOrInterface?: string): ObjectProphecy;
        prophesize(classOrInterface?: undefined): ObjectProphecy;

        /**
         * Checks all predictions defined by prophecies of this Prophet.
         *
         * @throws {Jymfony.Component.Testing.Exception.Prediction.AggregateException} If any prediction fails
         */
        checkPredictions(): void;
    }
}
