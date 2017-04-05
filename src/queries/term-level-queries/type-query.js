'use strict';

const _ = require('lodash');

const { Query } = require('../../core');

/**
 * Filters documents matching the provided document / mapping type.
 *
 * [Elasticsearch reference](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-type-query.html)
 *
 * @extends Query
 */
class TypeQuery extends Query {

    /**
     * Creates an instance of `TypeQuery`.
     *
     * @param {string} type The elasticsearch doc type
     */
    constructor(type) {
        super('type');

        if (!_.isNil(type)) this._queryOpts.value = type;
    }

    /**
     * Sets the elasticsearch doc type to query on.
     *
     * @param {string} type The elasticsearch doc type
     * @returns {TypeQuery} returns `this` so that calls can be chained.
     */
    value(type) {
        this._queryOpts.value = type;
        return this;
    }

    /**
     * Sets the elasticsearch doc type to query on.
     * Alias for method `value`.
     *
     * @param {string} type The elasticsearch doc type
     * @returns {TypeQuery} returns `this` so that calls can be chained.
     */
    type(type) {
        return this.value(type);
    }
}

module.exports = TypeQuery;
