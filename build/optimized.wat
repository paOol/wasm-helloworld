(module
 (type $none_=>_i32 (func (result i32)))
 (memory $0 1)
 (data (i32.const 1036) "L")
 (data (i32.const 1048) "\01\00\00\006\00\00\00H\00e\00l\00l\00o\00 \00W\00o\00r\00l\00d\00 \00f\00r\00o\00m\00 \00T\00y\00p\00e\00s\00c\00r\00i\00p\00t")
 (export "helloWorld" (func $assembly/index/helloWorld))
 (export "memory" (memory $0))
 (func $assembly/index/helloWorld (result i32)
  i32.const 1056
 )
)
