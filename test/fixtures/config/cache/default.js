module.exports =
{
  Customers:
  {
    dbName     : 'from_default_js',
    dbPassword : 'password will be overwritten.',
    dbPassword2: 'password will be overwritten.',

    lang:
    [
      'en',
      'es'
    ]
  },
  AnotherModule:
  {
    'parm1': 'value1'
  },
  staticArray:
  [
    2,
    1,
    3
  ],
  Inline:
  {
    a: '',
    b: '1'
  },
  ContainsQuote   : '"this has a quote"',
  MoreComplexQuote: '<a href="http://localhost:3000/offers/reply?id={{system.contact.value}}">Test String</a>'
};
