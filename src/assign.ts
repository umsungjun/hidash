/* eslint-disable @typescript-eslint/no-explicit-any */
import isNull from './isNull'

/**
 * @description
 * Assigns the values of all enumerable properties from one or more source objects to a target object.
 *
 * @param {object} target The target object to assign properties to
 * @param {...object} sources The source objects to assign properties from
 * @returns {object} The target object with assigned properties
 */
export function assign<TObject, TSource>(target: TObject, source: TSource): TObject & TSource
export function assign<TObject, TSource1, TSource2>(
    target: TObject,
    source1: TSource1,
    source2: TSource2,
): TObject & TSource1 & TSource2
export function assign<TObject, TSource1, TSource2, TSource3>(
    target: TObject,
    source1: TSource1,
    source2: TSource2,
    source3: TSource3,
): TObject & TSource1 & TSource2 & TSource3
export function assign<TObject, TSource1, TSource2, TSource3, TSource4>(
    target: TObject,
    source1: TSource1,
    source2: TSource2,
    source3: TSource3,
    source4: TSource4,
): TObject & TSource1 & TSource2 & TSource3 & TSource4
export function assign<TObject>(target: TObject): TObject
export function assign(target: unknown, ...sources: any[]): any
export function assign(target: unknown, ...sources: any[]) {
    const to = Object(target)

    if (sources.length === 0) {
        return to
    }

    for (const source of sources) {
        if (!isNull(source)) {
            for (const key of Object.keys(source)) {
                to[key] = source[key]
            }
        }
    }
    return to
}

export default assign
