// default products for testing
if (Products.find().count() === 0) { Products.insert({
name: 'Best Window',
material: 'Glass',
dimension: '50*32',
color: 'Yellow',
category: 'category1'
});
Products.insert({
name: 'My Window',
material: 'Glass',
dimension: '62*70',
color: 'Blue',
category: 'category2'
});
Products.insert({
name: 'Broken Window',
material: 'Glass',
dimension: '1080*1920',
color: 'Red',
category: 'category1'
});}

//default categories for tesing
if (Categories.find().count() === 0) { Categories.insert({
name: 'Ceiling'
});
Categories.insert({
name: 'Wall'
});
Categories.insert({
name: 'Window'
});}
