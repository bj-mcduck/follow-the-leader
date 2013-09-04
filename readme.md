# Follow The Leader

A jQuery plugin that you can use to synchronize a bunch of fields together.
So if you change the value of one, all the others change too.

###Everything is the same.

The simplest use of FTL is to place the same class on all the `<input>` fields you want synched. Something like:

	<input class=todo-list></input>
	<input class=todo-list></input>
	<input class=todo-list></input>

Then call `$(".todo-list").followTheLeader();` in your JavaScript file. When you type in any of those fields, it will update the other fields to match it.

### Blocking updates if the input has been typed in.

You can also set an input to only allow itself to be updated if it doesn't already have a unique value.
To do that, add the class `take-suggestion` to the input:

	<input class=todo-list></input>
	<input class="todo-list take-suggestion"></input>
	<input class=todo-list></input>

Now, the field that has the `take-suggestion` class will only change to follow the others if it hasn't already been set otherwise.


-----

You can see this in action on [AppRecord.SupremecourtBC.ca](http://apprecord.supremecourtbc.ca).