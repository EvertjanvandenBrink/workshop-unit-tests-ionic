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

- Karma: de test runner
- Jasmine: het test framework

## Setup 

*Project opzetten.*

```
npm install 
ionic serve 
```

*Tests uitvoeren.*

```
npm test
```

## Testing Structure

Karma maakt gebruik van een browser om de tests in uit te voeren. Standaard is dit Chrome. Dit kan je veranderen als je geen Chrome hebt, of als je graag je favoriete browser wil gebruiken. 
Dit vereist enige setup. In dit voorbeeld wordt Safari toegevoegd, dit gaat als volgt: 

Installeer de ```karma-safari-launcher``` als devDependency

```
npm install karma-safari-launcher --save-dev
```

Vervolgens pas je de karma configuratie aan. Open ```karma.conf.js```  en voeg Safari toe in de array van browsers.

```javascript
browsers: ['Safari'],
```

Vervolgens voeg je de ```karma-safari-launcher``` toe in de plugins array.

```javascript
plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-safari-launcher')
    ],
```

Als je benieuwd bent of je favoriete browser ook ondersteund is, kijk dan op de [site](http://karma-runner.github.io/3.0/config/browsers.html) van Karma. Daar staan alle ondersteunde browsers weergegeven. 

Unit tests bevinden zich in de ```.spec``` files. Elk component/service heeft één ```.spec``` file.
Deze ```.spec``` files worden standaard gegenereerd wanneer je via de CLI een Angular component of service aanmaakt.


De ```.spec``` files bevatten een enkele ```describe``` aanroep die aangeeft waar de test over gaat.
Binnen deze ```describe``` kan je vervolgens andere ```describe``` aanroepen uitvoeren die over grote delen functionaliteit gaan.
In de ```describe``` kan je een ```it``` aanroepen. ```it``` wordt gebruikt voor het definiëren van individuele unit tests. 
Binnen elke ```describe``` kun je setup en teardown code aanroepen(Bijvoorbeeld ```beforeEach()``` of ```afterEach()```).

In de ```describe``` en ```it``` functies kan je ook een label toevoegen. In goed opgestelde tests vormen deze labels een zin voor elke testcase.
Dit kan er als volgt uitzien:

```
describe('Calculation', () => {
  describe('divide', () => {
    it('calculates 4 / 2 properly' () => {});
    it('cowardly refuses to divide by zero' () => {});
    ...
  });

  describe('multiply', () => {
    ...
  });
});
```


## Components

Pages in het Ionic framework zijn Angular components. Daarom worden de pagina's volgens de [Angular's Component Testing](https://angular.io/guide/testing#component-test-basics) guidelines gemaakt en getest. Sind pagina's en componenten TypeScript en HTML code gebruiken, is het mogelijk om class testing en component DOM testing uit te voeren.

### Component class testing

Als een pagina gemaakt is, wordt er een templaate test gegenereerd wat er zo uit ziet: 

```typescript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; import { async, ComponentFixture, TestBed } from '@angular/core/testing';  import { TabsPage } from './tabs.page';  describe('TabsPage', () => {   let component: TabsPage;   let fixture: ComponentFixture<TabsPage>;    beforeEach(async () => {     TestBed.configureTestingModule({       declarations: [TabsPage],       schemas: [CUSTOM_ELEMENTS_SCHEMA],     }).compileComponents();   });    beforeEach(() => {     fixture = TestBed.createComponent(TabsPage);     component = fixture.componentInstance;     fixture.detectChanges();   });    it('should create', () => {     expect(component).toBeTruthy();   }); });
```

In deze template file `wishlist.component.spec.ts` voegen we een test toe voor het maken van component test. Hier wordt er getest of een product verwijderd kan worden van de wishlist. 

```typescript
it('should remove product from wishlist', () => {
   // Here comes your first component test.
});
```

Voor deze test maken we nog geen gebruik van een mock (dit wordt in hoofdstuk mocking toegelicht). Voor nu voegen we een echt product toe aan de wishlist. 

```typescript
const product = new Product();
component.wishlist.push(product)
```

Vervolgens roepen we de functie aan voor het verwijderen van het product. 

```typescript
component.removeProductFromWishlist(product)
```
Het belangrijkste gedeelte is de test of het product daadwerkelijk verwijdert is. In deze test controleren we dit aan de hand van de lengte van het wenslijstje. Als deze 0 (leeg) is, is de test geslaagd. 

```typescript
expect(component.wishlist.length).toBe(0);
```

### Component DOM testing

Wanneer we component class testing uitvoeren maken we gebruik van de `component = fixture.componentInstance;`. Dit is een instance van het component class. In tegenstelling tot class testing, maken we bij DOM testing gebruik van de property `fixture.nativeElement`. Dit is een `HTMLElement` van het component. Dit maakt het mogelijk om volgens via de standaard HTML API methodes te testen, omdat er via het `HTMLElement` bijvoorbeeld een `querySelector` gebruikt kan worden.

In de template file `wishlist-external.component.spec.ts` voegen we een test toe voor het maken van een DOM test. Hier wordt getest of het `HTMLElement` title daadwerkelijk de text "Wishlist" bevat. 

```typescript
it('should contain title "Wishlist"', () => {
    // Here comes your first DOM test.
});
```

In de functie hierboven voegen we de volgende regel toe om het html element aan te spreken. 

```typescript
const wishlistElement: HTMLElement = fixture.nativeElement;
```
Nadat het `HTMLElement`in de variabele `wishlistElement` zit, kunnen we testen of de tekst overeenkomt met de verwachte tekst door de volgende regel toe te voegen. 

```
expect(wishlistElement.textContent).toContain('Wishlist');
```

## Services

...

## Mocking

...







