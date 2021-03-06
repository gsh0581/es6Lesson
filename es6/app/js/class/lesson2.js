{
    let a,b,rest;
    [a,b]=[1,2];
    //console.log(a,b);
}
{
    let a,b,rest;
    [a,b,...rest] =[1,2,3,4,5];
    //console.log(a,b,rest);
}
{
    let a,b;
    (
        {a,b} = {a:1,b:2}
        )
        //console.log(a,b);
}

{
    let a,b,c,rest;
    [a,b,c]=[1,2];
   // [a,b,c=3]=[1,2];
   // console.log(a,b,c); //1 2 undefined
                         //没有匹配上，就为undefined
}
{
    /**
     * 变量交换
     */
    let a = 1;
    let b = 2;
    [a,b] =[b,a];  
    //console.log(a,b);
}
{
    /**
     * 函数解构赋值
     */
    function f() {
        return [1,2];
    }
    let a,b;
    [a,b] = f();
    console.log(a,b);
}

{
    /**
     * 选择性接收函数的返回值
     */
    function f() {
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,,,b] = f();
    console.log(a,b); //1 4
}

{
    /**
     * 选择性接收函数的返回值
     */
    function f() {
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,,...b] = f();
    console.log(a,b); //1 [3,4,5]
}

{
    /**
     * 对象解构赋值
     */
    let o = {
        p:42,
        q:true
    }

    let {p,q} = o;
    console.log(p,q);
}

{
    let {a=10,b=5} = {a:3}
    console.log(a,b);//3 5
}
{
    let metaData={
        title:'abc',
        test:[{
            title:'text',
            desc:'description'
        }]
    }
    let {
        title:esTitle,
        test:[{
            title:cnTitle
        }]} = metaData;
    console.log(esTitle,cnTitle);
}