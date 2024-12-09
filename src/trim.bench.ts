import _trim from 'lodash/trim'
import {bench, describe} from 'vitest'

import trim from './trim'

const testCases = [
    // 공백 제거
    {value: '  hello  '}, // 양쪽 공백
    {value: '\tworld\t'}, // 탭 문자
    {value: '\ntrim me\n'}, // 개행 문자
    {value: ' no-space'}, // 앞 공백만
    {value: 'space-only '}, // 뒤 공백만
    {value: '   mixed spaces \t \n'}, // 혼합 공백
    {value: ''}, // 빈 문자열
    {value: '    '}, // 공백만 있는 문자열

    // 커스텀 문자 제거
    {value: ['--hello--', '-']}, // 대시(-)
    {value: ['__world__', '_']}, // 밑줄(_)
    {value: ['##test##', '#']}, // 해시(#)
    {value: ['!!important!!', '!']}, // 느낌표(!)
    {value: ['abcdeabc', 'abc']}, // 복잡한 문자 패턴
    {value: ['---test--', '-']}, // 대시(-)
    {value: ['xxtrimxx', 'x']}, // 문자(x)

    // 특수 케이스
    {value: [null, undefined]}, // null과 undefined 처리
    {value: ['$$$hello$$$', '$']}, // 달러($)
    {value: ['@@@world@@@', '@']}, // 골뱅이(@)
    {value: ['###javascript###', '#']}, // 해시(#)
    {value: ['***code***', '*']}, // 별표(*)
]

const ITERATIONS = 10000

describe('trim performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value}) => {
                Array.isArray(value) ? trim(value[0], value[1]) : trim(value as string)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value}) => {
                Array.isArray(value) ? _trim(value[0], value[1]) : _trim(value as string)
            })
        }
    })
})
