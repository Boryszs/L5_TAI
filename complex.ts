class Complex{
	private re: number;
	private im: number;
	
	constructor(re: number,im: number) {
			this.re = re;
			this.im = im;
		}
	
	add(complex: Complex):Complex{
		return new Complex(this.re + complex.re, this.im + complex.im);
	}
	
	sub(complex: Complex):Complex{
		return new Complex(this.re - complex.re,this.im - complex.im);
	}
	
	modulus(){
		this.toString();
		console.log('Modulus:'+Math.sqrt((Math.pow(this.re,2) + Math.pow(this.im,2))));
	}
		
	
	toString(){
		console.log('RE: '+this.re + ' Im: ' + this.im);
	}
}

let a = new Complex(3,4);
let b = new Complex(3,4);
let c = a.add(b);
c.toString();
let d = c.sub(a);
d.toString();
c.modulus();
