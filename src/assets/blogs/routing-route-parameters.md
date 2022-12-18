### 2022-12-16

# Angular Route Parameters

#### There are 2 options for retrieving route parameters in Angular: ActivatedRoute snapshot or subscribing to paramMap.

###### whatever-detail-component.ts

```ts
...
import { ActivatedRoute, ParamMap } from '@angular/router';
...
  constructor(private route: ActivatedRoute) {}
...
```


## Option 1 - using snapshot

###### whatever-detail-component.ts
```ts
...
import { ActivatedRoute } from '@angular/router';
...
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
...
```



## Option 2 - using paramMap

```ts
...
import { ActivatedRoute, ParamMap } from '@angular/router';
...
  constructor(private route: ActivatedRoute) {}
...
```





https://www.samjulien.com/how-to-use-route-parameters-in-angular

