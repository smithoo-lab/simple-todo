export class ServiceInjector {
    constructor(specs = {}) {
        this.setSpecs(specs);
        this._registry = {};
    }

    // TODO: addSpecs(spec[]), addSpec(key, spec)
    setSpecs(specs = {}) {
        this._specs = specs;
    }

    get(key) {
        if (!this._findSpec(key)) {
            return null;
        }

        return this._resolveInstance(key);
    }

    destroy() {
        const registry = this._registry;
        const entries = Object.entries(registry);
        entries.forEach(([key, instance]) => {
            if (registry.hasOwnProperty(key)) {
                if (instance.destroy) {
                    instance.destroy();
                }

                registry[key] = null;
                delete registry[key];
            }
        });

        this.setSpecs({});
        this._registry = {};
    }

    _findSpec(key) {
        return this._specs[key];
    }

    _findInstance(key) {
        return this._registry[key];
    }

    _createInstance(key) {
        const { Class: SpecClass, args = [] } = this._findSpec(key);
        return new SpecClass(...args);
    }

    _isRegistered(key) {
        return !!this._findInstance(key);
    }

    _register(key, instance) {
        this._registry[key] = instance;
    }

    _resolveInstance(key) {
        if (this._isRegistered(key)) {
            return this._findInstance(key);
        }

        return this._createInstance(key);
    }
}

export default ServiceInjector;
