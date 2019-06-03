/* Write a program that prints the numbers 100 to 200.
 * If the number is a multiple of 3, print "Loopy" instead
 * If the number is a multiple of 4, print "Lighthouse"
 * If the number is a muliiple of 3 and 4, print "LoppyLighthouse"
 */

 for (let i = 100; i <= 200; i++) {
   if (i % 3 === 0 && i % 4 === 0) {
     console.log('LoppyLighthouse');
   } else if (i % 3 === 0) {
     console.log('Loopy');
   } else if (i % 4 === 0) {
     console.log('Lighthouse');
   } else {
     console.log(i);
   }
 }