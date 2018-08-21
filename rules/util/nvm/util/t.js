class Typy {
    t(obj, nestedKeys){
        this.input = obj;

        if (nestedKeys) {
            this.input = getNestedObject(this.input, nestedKeys);
        }

        return this;
    }

    get isDefined() {
        if (typeof this.input !== 'undefined') return true;
        return false;
    }

    get isUndefined() {
        if (typeof this.input === 'undefined') return true;
        return false;
    }

    get isNull() {
        if (this.input === null && typeof this.input === 'object') return true;
        return false;
    }

    get isNullOrUndefined() {
        if (this.isNull || this.isUndefined) return true;
        return false;
    }

    get isBoolean() {
        if (typeof this.input === typeof true) return true;
        return false;
    }

    get isTrue() {
        if (this.input === true) return true;
        return false;
    }

    get isFalse() {
        if (this.input === false) return true;
        return false;
    }

    get isTruthy() {
        if (this.input) return true;
        return false;
    }

    get isFalsy() {
        if (!this.input) return true;
        return false;
    }

    get isObject() {
        if (
            typeof this.input === 'object' &&
            this.input === Object(this.input) &&
            Object.prototype.toString.call(this.input) !== '[object Array]'
        ) {
            return true;
        }
        return false;
    }

    get isEmptyObject() {
        if (this.isObject && Object.keys(this.input).length === 0) return true;
        return false;
    }

    get isString() {
        if (typeof this.input === 'string') return true;
        return false;
    }

    get isEmptyString() {
        if (this.isString && this.input.length === 0) return true;
        return false;
    }

    get isNumber() {
        if (Number.isFinite(this.input)) return true;
        return false;
    }

    get isArray() {
        if (Array.isArray(this.input)) return true;
        return false;
    }

    get isEmptyArray() {
        if (this.isArray && this.input.length === 0) return true;
        return false;
    }

    get isFunction() {
        if (typeof this.input === 'function') return true;
        return false;
    }

    get safeObject() {
        return this.input;
    }

    get safeString() {
        if (this.isString) return this.input;
        return '';
    }

    get safeNumber() {
        if (this.isNumber) return this.input;
        return 0;
    }

    get safeBoolean() {
        if (this.isBoolean) return this.input;
        return false;
    }

    get safeFunction() {
        if (this.isFunction) return this.input;
        return /* istanbul ignore next */ () => {};
    }
}

const getNestedObject = (obj, dotSeparatedKeys) => {
    if (arguments.length > 1 && typeof dotSeparatedKeys !== 'string') return undefined;
    if (typeof obj !== 'undefined' && typeof dotSeparatedKeys === 'string') {
        const pathArr = dotSeparatedKeys.split('.');
        pathArr.forEach((key, idx, arr) => {
            if (typeof key === 'string' && key.includes('[')) {
                try {
                    // extract the array index as string
                    const pos = /\[([^)]+)\]/.exec(key)[1];
                    // get the index string length (i.e. '21'.length === 2)
                    const posLen = pos.length;
                    arr.splice(idx + 1, 0, Number(pos));

                    // keep the key (array name) without the index comprehension:
                    // (i.e. key without [] (string of length 2)
                    // and the length of the index (posLen))
                    arr[idx] = key.slice(0, (-2 - posLen)); // eslint-disable-line no-param-reassign
                } catch (e) {
                    // do nothing
                }
            }
        });
        // eslint-disable-next-line no-param-reassign, no-confusing-arrow
        obj = pathArr.reduce((o, key) => (o && o[key] !== 'undefined' ? o[key] : undefined), obj);
    }
    return obj;
};

const t = (input, objectPath) => new Typy().t(input, objectPath);

module.exports = t;