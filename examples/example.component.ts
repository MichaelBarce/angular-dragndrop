import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'example-dragndrop',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent
{
	lists = [{
		name: "Greetings",
		items: ["Hey", "Hi", "Welcome", "Yolo", "Greetings my friend!"],
	},
	{
		name: "Foods",
		items: ["Banana", "Apple", "Sausage"],
	},
	{
		name: "Websites",
		items: ["google.com", "facebook.com", "twitter.com", "bbc.com"],
	},
	{
		name: "Todo",
		items: ["Play starcraft", "Play Simscity", "Go to a meeting"],
	},
	{
		name: "Products",
		items: ["Headset", "GPU", "iPhone"],
	},
	{
		name: "Programming Language & Drop",
		items: ["PHP", "Ruby", "Javascript", "Python", "C++", "C#"],
	}];

	ngOnInit()
	{
		let data = JSON.parse(localStorage.getItem("lists"));
		if(data)
		{
			this.lists = data;
		}
	}

	onSort($event)
	{
		//console.log("sort:", $event.oldIndex, $event.newIndex);
		this.lists[$event.newContainer].items.splice($event.newIndex, 0, this.lists[$event.oldContainer].items.splice($event.oldIndex, 1)[0]);
		this.Save();
	}

	addItem(container)
	{
		this.lists[container].items.push("Num:" + Math.random());
		this.Save();
	}

	clearItems(container)
	{
		this.lists[container].items = [];
		this.Save();
	}

	Save()
	{
		localStorage.setItem("lists", JSON.stringify(this.lists));
	}

	onContainerSort($event)
	{
		console.log("Container Sort", $event);
	}
}
