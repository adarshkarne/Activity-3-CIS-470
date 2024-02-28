
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    // test case - 1
    test('Equilateral triangle with least valid side length', () => {
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
      
    });
    //test case - 2
    test('Equilateral triangle with max valid side length', () => {
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
      
    });
    //test case - 14
    test('Equilateral triangle with non-integer side length', () => {
      expect(classifyTriangle(5.5, 5.5, 5.5)).toBe('Equilateral');
  });
  
    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
    // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    //test case - 5
    test('should classify an Isosceles triangle (b == c)', () => {
      expect(classifyTriangle(3, 5, 5)).toBe('Isosceles');
  });
  // test case - 6
  test('should classify an Isosceles triangle (a == c)', () => {
    expect(classifyTriangle(5, 3, 5)).toBe('Isosceles');
});
// test case - 11
test('Isosceles triangle with two sides at the maximum length (Boundary Value)', () => {
  expect(classifyTriangle(199, 199, 1)).toBe('Isosceles');
});
//test case - 15
test('Isoscales triangle with non-integer side length', () => {
  expect(classifyTriangle(5.5, 5.5, 10.9)).toBe('Isosceles');
});

    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(10, 12, 14)).toBe('Scalene');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    // test case - 16
    test('Scalene triangle with non-integer side length', () => {
      expect(classifyTriangle(5.5, 8.7, 10.9)).toBe('Scalene');
    });
    //test case - 17
    test('Scalene triangle with max value side length', () => {
      expect(classifyTriangle(200, 198, 197)).toBe('Scalene');
    });
  });
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    //test case - 3

    test('should return error for negative inputs', () => {
      expect(classifyTriangle(-10, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
    // test case - 4
    test('should return error for out of index inputs', () => {
      expect(classifyTriangle(10, 400, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
    // test case - 10
    test('Error for invalid inputs with zero side length (Boundary Value)', () => {
      expect(classifyTriangle(0, 2, 3)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    // test case - 7
    test('should return "Not a Triangle" (a + b = c)', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
  });
  // test case - 8
  test('should return "Not a Triangle" (a + c = b)', () => {
    expect(classifyTriangle(1, 3, 2)).toBe('Not a Triangle');
});
  // test case - 9
  test('should return "Not a Triangle" (b + c = a)', () => {
    expect(classifyTriangle(2, 3, 1)).toBe('Not a Triangle');
});
// test case - 12

test('should return "Not a Triangle" when b >= a + c', () => {
  expect(classifyTriangle(10, 100, 10)).toBe('Not a Triangle');
});
//test case - 13
test('should return "Not a Triangle" when a >= b + c', () => {
  expect(classifyTriangle(100, 10, 10)).toBe('Not a Triangle');
});
//test case - 18
test('If inputs are all zeros', () => {
  expect(classifyTriangle(0, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});
//test case - 19
test('Combination of Isosceles and Scalene triangles with non-integer side length', () => {
  expect(classifyTriangle(6.2, 6.2, 5)).toBe('Isosceles');
});
// test case - 20
test('Error for invalid inputs with non-integer side length and negative value', () => {
  expect(classifyTriangle(-2.5, 3.5, 4.5)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});
