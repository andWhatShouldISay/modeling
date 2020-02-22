 function wr(...x) {
  console.log(...x)
}
 
function sort(a, inc = true) {
  if(inc) a.sort((a, b) => a - b)
  else a.sort((a, b) => b - a)
}
 
function readInt(a, i) {
  if(i === undefined) return parseInt(a.shift())
  else return parseInt(a[i])
}
 
function readInts(a, i) {
  if(i === undefined) return arr.shift().split(' ').map(a => parseInt(a))
  else return arr[i].split(' ').map(a => parseInt(a))
}

//====================
var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, arr) {
    main(arr.split('\n').map(a => a.replace(/(\r\n|\n|\r)/gm, '')))
})
//====================*/

function main(input){
		var rad=0.05
		var ro=1.2250
		var fer=7870
		var V=4.0/3.0*Math.acos(-1)*rad*rad*rad
		var m=V*fer
		console.log(m)
		console.log(V)

		var beta=0.15*Math.acos(-1)*rad*rad*ro/2
		beta=0


		console.log(beta)
		var alpha=Math.acos(-1)/4
		var v=10
		var grav=10

		function f(t,u,w){
		    return -beta*u*Math.hypot(u,w)
		}
		function g(t,u,w){
		    return -grav-beta*w*Math.hypot(u,w)
		}
		function R(value, k){
         		return Math.round((Math.pow(10, k)*value))/Math.pow(10, k);
         }

		u0=v*Math.cos(alpha)
		w0=v*Math.sin(alpha)
		var t=0
		h=0.01
		var X=0
		var Y=0
		while(1){
            k1=f(t,u0,w0)
            q1=g(t,u0,w0)

            k2=f(t+h/2,u0+h*k1/2,w0+h*q1/2)
            q2=g(t+h/2,u0+h*k1/2,w0+h*q1/2)

            k3=f(t+h/2,u0+h*k2/2,w0+h*q2/2)
            q3=g(t+h/2,u0+h*k2/2,w0+h*q2/2)

            k4=f(t+h,u0+h*k3,w0+h*q3)
            q4=g(t+h,u0+h*k3,w0+h*q3)

			u1 = u0 + h*(k1 + 2.0*k2 + 2.0*k3 + k4)/6.0;
			w1 = w0 + h*(q1 + 2.0*q2 + 2.0*q3 + q4)/6.0;


            X+=h*u1
            Y+=h*w1

            console.log("\t" + R(t+h,6) + "          " + R(u1,6) + "          " + R(w1,6)+ "          " + R(X,6)+ "          " + R(Y,6))
            console.log("\t\t\t\t\t"+(v*Math.sin(alpha)-grav*(t+h)))
            console.log("")

            if (Y<=0)
                break

            u0=u1
            w0=w1

            t+=h
		}

		var xG=Math.tan(alpha)/(grav/2/v/v/Math.cos(alpha)/Math.cos(alpha))

		console.log(xG)



}