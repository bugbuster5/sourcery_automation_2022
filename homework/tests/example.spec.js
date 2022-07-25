// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

data.forEach(build => {
  test.describe(build + ': First Number Exists', () => {
    test('Does build have First Number component', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await expect(page.locator('#number1Field')).toBeVisible();
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Second Number Exists', () => {
    test('Does build have Second Number component', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await expect(page.locator('#number2Field')).toBeVisible();
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Operation Dropdown Exists', () => {
    test('Does build have Operation Dropdown component', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await expect(page.locator('#selectOperationDropdown')).toBeVisible();
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Calculate Button Exists', () => {
    test('Does build have Calculate Button component', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await expect(page.locator('#calculateButton')).toBeVisible();
      await expect(page.locator('#calculateButton')).toBeEnabled();
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Answer Field Exists', () => {
    test('Does build have Answer Field component', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await expect(page.locator('#numberAnswerField')).toBeVisible();
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Integer checkbox', () => {
    test('Does build have Integer checkbox editable component', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await expect(page.locator('#integerSelect')).toBeVisible();
      await expect(page.locator('#integerSelect')).toBeEnabled();
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Clear button', () => {
    test('Does build have Clear button component', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await expect(page.locator('#clearButton')).toBeVisible();
      await expect(page.locator('#clearButton')).toBeEnabled();
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Add', () => {
    test('Adding 2 and 3 results in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Add' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Subtract', () => {
    test('Subtracting 3 and 2 results in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: build});
      await page.locator('#number1Field').type('3');
      await page.locator('#number2Field').type('2');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Subtract' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Multiply', () => {
    test('Multiplying 3 and 2 results in 6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: build});
      await page.locator('#number1Field').type('3');
      await page.locator('#number2Field').type('2');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Multiply' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Divide', () => {
    test('Dividing 2 and 2 results in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: build});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('2');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Divide' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Concatenate', () => {
    test('Concatenating la and bas results in labas', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: build});
      await page.locator('#number1Field').type('la');
      await page.locator('#number2Field').type('bas');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Concatenate' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('labas');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Clear Answer', () => {
    test('Answer clears after clicking Clear Button', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.locator('#calculateButton').click({ timeout: 60000 });;
      await page.locator('#clearButton').click();
      await expect(page.locator('#numberAnswerField')).toBeEmpty();
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Clear Error', () => {
    test('Error message clears after clicking Clear Button', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('la');
      await page.locator('#number2Field').type('3');
      await page.locator('#calculateButton').click();
      await page.locator('#clearButton').click();
      await expect(page.locator('#numberAnswerField')).toBeEmpty();
      await expect(page.locator('#errorMsgField')).toBeHidden();
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Error state', () => {
    test('Adding string to string gives back an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('la');
      await page.locator('#number2Field').type('bas');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Add' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toBeEmpty();
      await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Error state', () => {
    test('Adding integer to string gives back an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('bas');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Add' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toBeEmpty();
      await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Error state', () => {
    test('Subtracting string to string gives back an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('la');
      await page.locator('#number2Field').type('bas');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Subtract' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toBeEmpty();
      await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Error state', () => {
    test('Subtracting integer to string gives back an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('bas');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Subtract' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toBeEmpty();
      await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Error state', () => {
    test('Multiplying string to string gives back an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('la');
      await page.locator('#number2Field').type('bas');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Multiply' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toBeEmpty();
      await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Error state', () => {
    test('Multiplying integer to string gives back an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('bas');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Multiply' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toBeEmpty();
      await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Error state', () => {
    test('Dividing string to string gives back an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('la');
      await page.locator('#number2Field').type('bas');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Divide' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toBeEmpty();
      await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Error state', () => {
    test('Dividing integer to string gives back an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('bas');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Divide' }));
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toBeEmpty();
      await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
    });
  });
});

data.forEach(build => {
  test.describe(build + ': Error state', () => {
    test('Concatenating integer to string does not give back an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.locator('#selectBuild').selectOption(({ label: build }));
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('bas');
      await page.locator('#selectOperationDropdown').selectOption(({ label: 'Concatenate' }));
      await page.locator('#calculateButton').click();
  
      
      await expect(page.locator('#errorMsgField')).toBeHidden();
    });
  });
});
