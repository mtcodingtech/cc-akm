import Image from "next/image";
import Link from "next/link";
import React from "react";

function Products() {
  return (
    <div>
      <Link href="/about">About</Link>
      <Image src="https://images.pexels.com/photos/32481915/pexels-photo-32481915/free-photo-of-charming-cottage-surrounded-by-daisy-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" width="200" height="200"></Image>
    </div>
  );
}

export default Products;
