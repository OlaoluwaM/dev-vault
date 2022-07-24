type AnyFunction<P = any, RT = unknown> = (...args: P[]) => RT
type FuncParams = string[]


function toNamedParams<Fn extends AnyFunction>(fn: Fn) {
	const initialFuncParamObj = generateInitialParamsObj(getFuncPositionalParams(fn))

	return (passedArgsObj: Record<string, Parameters<Fn>[number]) => {
		const funcArgsArr = Object.values({...initialFuncParamObj, ...passedArgsObj})
		return fn.apply(null, funcArgsArr)
	}
}

function getFuncPositionalParams(fn: AnyFunction) {
	const REGEX_FOR = {
		CONTENT_WITHIN_PARENTHESES: /\([^)]*\)/m,
		PARENTHESES: /\(|\)/g,
		SPACE_AND_COMMA_DELIMITED_LIST: /\s*,\s*/
	}

	const funcParamsStrMatchArr = fn.toString().match(REGEX_FOR.CONTENT_WITHIN_PARENTHESES)
	if (!funcParamsStrMatchArr) throw new Error(`Could not extract args for ${fn.name} function`)

	const [funcParamsStr] = funcParamsStrMatchArr
	const funcParamsStrWithoutBraces = funcParamsStr.replace(REGEX_FOR.PARENTHESES, '')

	const funcParamsArr = funcParamsStrWithoutBraces.split(REGEX_FOR.SPACE_AND_COMMA_DELIMITED_LIST).map(removeEverythingAfterFirstSpace)
	return funcParamsArr
}

function removeEverythingAfterFirstSpace(str: string): string {
	const SPACE_CHAR = ' '
	
	const indexOfFirstSpaceCharInStr = str.indexOf(SPACE_CHAR)
	if (indexOfFirstSpaceCharInStr === -1) return str

	const truncatedStr = str.slice(0, indexOfFirstSpaceCharInStr)
	return truncatedStr
}

function generateInitialParamsObj(functionParams: FuncParams) {
	const funcParamsObj = functionParams.reduce(generateEmptyParamObj, {})
	return funcParamsObj
}

function generateEmptyParamObj(obj: Record<string, undefined>, param: string): Record<string, undefined> {
	return {...obj, [param]: undefined}
}
