const fun2 = () => {
    console.log('fun2 is starting');
}
const func1 = () => {
    console.log('fun1 is starting');
    fun2();console.log('fun1 is ending');
}
func1();
