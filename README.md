# Workshop Unit Testing in Ionic

| **Thema**                                                    |
| ------------------------------------------------------------ |
| Product in winkelwagen (Unit Tests)                          |
| **Contributors:**                                            |
| Rick Goemans, Wisse van Balveren, Evertjan van den Brink, Niels van Leeuwen |
| **Datum**                                                    |
| 22-02-2019                                                   |



Deadline: Woensdag 20-02-19

Planning: 

- Rick: Maakt project rondom het thema 
- Evert: Ppoint + uitleg
- Wisse: Testing Structure 
- Niels:  Component
- Rick: Services
- Evert: Mocking

## Uitleg

Dit project simuleert een gedeelte van een webwinkel, waarbij een product wordt toegevoegd aan een wishlist. Om de werking goed te testen, dienen er unit tests geschreven te worden. Dit wordt in deze worskhop uitgelegd. 

![image-20190219114208926](https://github.com/HANICA-MAD/dha-vj-2019-vt-workshop-unit-tests-ionic/blob/master/image-20190219114208926.png)

### Frameworks

- Karma
- Jasmine

## Setup 

*Project opzetten.*

```
npm install 
ionic serve 
```

## Testing Structure

*Hoe een test is opgezet.*

## Components

Pages in het Ionic framework zijn Angular components. Daarom worden de pagina's volgens de [Angular's Component Testing](https://angular.io/guide/testing#component-test-basics) guidelines gemaakt en getest. Sind pagina's en componenten TypeScript en HTML code gebruiken, is het mogelijk om class testing en component DOM testing uit te voeren. Als een pagina gemaakt is, wordt er een templaate test gegenereerd wat er zo uit ziet: 

```
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; import { async, ComponentFixture, TestBed } from '@angular/core/testing';  import { TabsPage } from './tabs.page';  describe('TabsPage', () => {   let component: TabsPage;   let fixture: ComponentFixture<TabsPage>;    beforeEach(async () => {     TestBed.configureTestingModule({       declarations: [TabsPage],       schemas: [CUSTOM_ELEMENTS_SCHEMA],     }).compileComponents();   });    beforeEach(() => {     fixture = TestBed.createComponent(TabsPage);     component = fixture.componentInstance;     fixture.detectChanges();   });    it('should create', () => {     expect(component).toBeTruthy();   }); });
```

## Services

...

## Mocking

...







