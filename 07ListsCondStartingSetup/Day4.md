Conditional Content
v-if(and v-show) allows you to render content only if a certain condition is met
v-if can be combined with v-else and v-else-if (only on direct sibling elements)
/////////////////////////////////////////////////////////////////////////////////
Lists
v-for can be used to render to multiple elements dynamically
v-for can b used with arrays, objects and ranges(numbers)

v-for Variations
You can extract values, values and indexes or value, keys and indexs
If you need v-for and v-if, Don't use them on the same element. Use a wrapper on the samw element.
Use a wrapper with v-if instead

Keys
Vue re-uses DOM elements to optimize performanze -> This can lead to bugs if elements contain state
Bind the key attribute to a unique value to help Vue identify elements that belong to list content
