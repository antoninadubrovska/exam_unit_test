# Inlämningsuppgift i kursen Testning

Börja med att skapa en **fork** av detta repo.
[Fork a repository | GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

+ [1 Förutsättningar](#1-förutsättningar)
+ [2 Enhetstest med Jest](#2-enhetstest-med-jest)
+ [3 Git](#3-git)
+ [4 Felhantering](#4-felhantering)
+ [5 Acceptanskriterier](#5-acceptanskriterier)
+ [6 Bedömning](#6-bedömning)
+ [7 Tips](#7-tips)

## 1 Förutsättningar

**Uppgiften är individuell.** Man får diskutera uppgiften, men du ska skriva koden själv.

**Du ansvarar för koden** - du ska kunna förklara 100% av det du lämnar in.

När du använder AI, prova den här prompten:

> Från och med nu ska du svara kortfattat. Du ska hjälpa mig att lära mig om testning med TDD, JavaScript och Jest. Det är okej med kodexempel, men svara aldrig med kompletta lösningar. Förklara koncept och ställ frågor till mig för att kontrollera att jag förstår.


Detta är därför att testning handlar om förståelse, ännu mer än vanlig kod. Det handlar inte om att lösa ett specifikt problem, utan om att lära sig tänka som en testare.


## 2 Enhetstest med Jest

Din uppgift är att skriva tester för en del av logiken som ska finnas i en webbshop. Eftersom denna del är oberoende av användargränssnittet (tänk dig att React-komponenter i framtiden kommer att importera dina funktioner) går det att skriva enhetstester för den med Jest.

*Börja i `validation.test.js`.*

---

## 3 Git
Arbeta i main-branchen. (Eftersom du arbetar ensam.)

Gör en separat commit efter varje testfall.

---

## 4 Felhantering
Om en funktion får felaktig input har du två alternativ:
1. returnera ett värde som representerar felet
2. kasta ett Error som måste fångas med try/catch

Avgör själv vilket som är mest rimligt, från fall till fall. Exempel:

```js
function exempel1(num) {
	if( (typeof num) !== 'number' ) {
		return false
	}
}

function exempel2(num) {
	if( (typeof num) !== 'number' ) {
		throw new Error('Här beskriver du felet')
	}
}
```

---

## 5 Acceptanskriterier

### Validering
Det finns två sorters objekt: "cart item" och "product". Exempel på giltiga objekt finns i `validation.test.js`. Testa funktionerna `isCartItem` och `isProduct`.

### Kundvagn
Testa funktionerna:
1. `function getCartItemCount()` - antalet olika sorters produkter i kundvagnen
1. `function getItem(index)`
1. `function getTotalCartValue()` - sammanlagda värdet av alla produkter i kundvagnen
1. `function addToCart(newItem)`
1. `function removeFromCart(itemId)`
1. `function editCart(itemId, newValues)` - ändra antal produkter
1. `function clearCart()`

*newValues ska vara ett objekt som innehåller allt som ska ändras. Det behöver inte vara ett komplett cart-objekt.*

---

## 6 Bedömning
För G ska du
+ skriva testfall för alla funktioner.

För VG ska du
+ skriva testfall som täcker alla ekvivalensklasser,
+ ha testfall som fångar errors: `expect(..).toThrow(..)`

*Om en funktion till exempel innehåller en if-sats finns det 2 vägar som koden kan ta: den där villkoret är true, och den där villkoret är false. Har funktionen if-else if-else finns det 3 vägar. Har funktionen en parameter så behöver man titta på parameterns ekvivalensklasser.*


### 7 Tips

1 **Ekvivalensklasser** står det om i presentation 3. Det handlar om att en funktion kan anropas på olika sätt. Vilka olika värden kan parametrarna ha? Gör minst ett testfall för varje kategori av värden.

Exempel: tänk dig en funktion som ska tala om ifall det är sommar. Medeltemperaturen ska vara över 10 grader. Det finns tre kategorier:
* Mer än 10 grader -> sommar
* 10 grader eller mindre -> inte sommar
* 'abc', null, m.m. -> felaktig input


2 **Kontrollera om ett objekt innehåller en egenskap**
```js
let obj = { x: 42 }

// metod 1
if( 'x' in obj ) { ... }

// metod 2
if( obj.x !== undefined ) { ... }

// metod 3
if( Object.hasOwn(obj, 'x') ) { ... }
```

3 **Kontrollera datatyp**
```js
let x = 42
if( typeof x === 'number' ) { ... }
```

[Tillbaka till toppen](#inlämningsuppgift-i-kursen-testning)
