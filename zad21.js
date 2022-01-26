<html>
    <head>

    </head>
        <body>


<b><br>1. Rodzaje „filozofii” programowania.<br>
<br>2. Opisz paradygmat programowania strukturalnego. Założenia programowania 
strukturalnego.
<br>3. Programowanie obiektowe definicja(angielski skrót, obiekty, stan, zachowanie, 
końcowa konkluzja czym jest programowanie obiektowe).<br>
<br>4. Dlaczego stosujemy programowanie obiektowe?<br>
<br>5. Omów następujące pojęcia ( w krótkiej formie):<br>
<br>• Klasa <br>
<br>• Obiekt <br></br>
<br>• Właściwość <br>
<br>• Metoda <br>
<br>• Konstruktor <br>
<br>• Dziedziczenie <br>
<br>• Hermetyzacja <br>
<br>• Polimorfizm<br></b>

<br></br>1.<br></br>
<br></br>1)Programowanie strukturalne <br></br>
<br></br>2)Programowanie obiektowe<br></br>


<br></br>2.<br></br>
<br></br>Programowanie strukturalne – paradygmat programowania opierający się na podziale kodu <br></br>
<br></br>źródłowego programu na procedury i hierarchicznie ułożone bloki z wykorzystaniem struktur <br></br>
<br></br>kontrolnych w postaci instrukcji wyboru i pętli. <br></br>
<br></br>Programowanie strukturalne zwiększa czytelność i ułatwia analizę programów, co stanowi znaczącą <br></br>
<br></br>poprawę w stosunku do trudnego w utrzymaniu „spaghetti code” często wynikającego z użycia <br></br>
<br></br>instrukcji goto <br></br>           
       
<br></br>Założenia programowania strukturalnego<br></br>
<br></br>1) Podzielone bloki kodu mają jeden punkt wejścia (mogą mieć wiele punktów wyjścia),<br></br>
<br></br>2) Wykonywanie wyrażeń w określonej kolejności,<br></br>
<br></br>3) Używanie instrukcji warunkowych (if, if else),<br></br>
<br></br>4) Używanie pętli (for, while, do while),<br></br>
<br></br>5) Unikanie instrukcji skoku (goto),<br></br>
<br></br>6) Unikanie instrukcji break, continua,<br></br>
<br></br>7) W programowaniu proceduralnym (strukturalne) funkcje i zmienne opisujące dany przedmiot <br></br>
<br></br>nie są ze sobą powiązane.   <br></br>   
       
<br></br>3.<br></br>
<br></br>Programowanie obiektowe jest to podejście bardziej naturalne dla ludzi, bardziej zgodne z <br></br>
<br></br>rzeczywistością. W pamięci komputera tworzona jest wirtualna rzeczywistość. Definiowane <br></br>
<br></br>(powoływane są do wirtualnego życia w pamięci komputera) obiekty na podstawie cześniej <br></br>
<br></br>zdefiniowanych klas. Obiekty mają zdefiniowane metody oraz pola.<br></br>

<br>Programowanie obiektowe definicja:<br>
<br>Programowanie obiektowe (ang. object-oriented programming) — sposób programowania, w <br>
<br>którym programy definiuje się za pomocą:<br>
<br>• obiektów (obiekty powoływane są do życia wirtualnego przez programistę, mogą być kasowane <br>
<br>przez programistę) np. okienka w Windows→okienko jest obiektem,<br>
<br>• obiekt ma jakiś stan (czyli dane, w programowaniu obiektowym nazywane najczęściej polami) np. <br>
<br>wielość okienka w Windows,<br>
<br>• obiekt wykazuje pewne zachowanie (czyli posiada pewne procedury w programowaniu <br>
<br>obiektowym nazywane metody). Np. jest zdefiniowana metoda do zmiany wielkości okienka.<br>
<br>Czyli obiektowy program komputerowy wyrażony jest jako zbiór takich obiektów, <br>
<br>komunikujących się pomiędzy sobą w celu wykonywania zadań.<br>
<br>Dlaczego stosujemy programowanie obiektowe:<br>
<br>• Jest to bardziej naturalne podejście przez programistę podczas tworzenia programów ponieważ <br>
<br>otaczający nas świat to różnego rodzaju przedmioty. Tworząc program komputerowy dokonujemy <br>
<br>pewnego ich odwzorowania rzeczywistości np. definiujemy obiekt samochód. Definiujemy pola <br>
<br>czyli jedo stan np. rok produkcji, marka, kolor. Definiujemy również metody czyli co umie np. <br>
<br>hamowanie, przyśpieszanie. Definicja obiektu jego metod i pól znajduje się w klasie. Następnie na <br>
<br>podstawie zdefiniowanego obiektu (może mieć pola oraz metody) powołujemy obiekt w pamięci <br>
<br>wirtualnej<br>
<br>• Programowanie obiektowe pozwala na lepsze gospodarowanie pamięciom komputera, ponieważ <br>
<br>gdy obiekt staje się zbędny możemy go usunąć co zwolni pamięc zajmowaną przez ten obiekt. W <br>
<br>programowaniu strukturalnym aby zwalniać pamięć konieczne było stosowanie dynamicznych <br>
<br>struktur danych np. stos czy kolejka. <br>
<br>• W programowaniu obiektowym dobrze napisna i przetestowana klasa pozwala na stosowaniu <br>
<br>przez innych programistów. Zaoszczędza to czas i środki pieniężne.<br>
<br>
4.<br>
W przypadku programowania zorientowanego na obiekt (programowania obiektowego)<br>
dokonuje się powiązania metod (funkcji programu) z danymi (zmiennymi) definiującymi przedmiot. <br>
Wszystko to grupuje się w tzw. klasie zawierającej zarówno dane (pola) definiowanego przedmiotu, <br>
jak i funkcje (metody). W ten sposób definicje przedmiotu i jego właściwości znajdują się w jednym <br>
miejscu programu. W języku JavaScript, opis klasy jest dokonywany za pomocą pól (zmienne) i <br>
metod(funkcje).<br>
<br>
<br>5.<br>
<br>Klasa (ang. "class")<br>
<br> Klasa rodzaj foremki, która opisuje nam jak będą wyglądać tworzone na jej podstawie nowe <br>
 <br>obiekty. Klasa jest to złożony typ będący opisem (definicją) obiektu/obiektów wraz z definicją pól i <br>
<br>metod obiektów.<br>
<br>Obiekt (ang. "object")<br>
<br>Instancja (byt, twór) który powstał na podstawie klasy. Czyli Obiekty są konstrukcjami <br>
 <br>programistycznymi mającymi tak zwane właściwości (inaczej pola obiektu), którymi mogą być <br>
<br>zmienne lub inne obiekty. Z obiektami powiązane są funkcje wykonujące operacje na ich <br>
<br>właściwościach, nazywane metodami.<br>
<br>Właściwość (ang. "property")<br>
<br> Własność obiektu, np. kolor.<br>
 <br>Metoda (ang. "method")<br>
<br> Zdolność (czynność) którą umie wykonywać obiekt, np. chodzenie (idź). Realizowane w postaci <br>
 <br>konstrukcji podobnej do funkcji.<br>
<br>Konstruktor (ang. "constructor")<br>
<br> Metoda wywoływana w momencie inicjalizacji obiektu. np. tworzymy obiekt a wraz z tworzeniem <br>
 <br>obiektu uruchomi się metoda, która nada np. Imię i Nazwisko.<br>
<br>Dziedziczenie (ang. "inheritance")<br>
<br> Klasa może dziedziczyć własności od innej klasy. Tworzymy klasę na podstawie innej klasy <br>
 <br>pobierając od „rodzica” właściwości i metody, może dopisać nowe pola i nowe metody.<br>
<br>Hermetyzacja (lub enkapsulacja - ang. "encapsulation")<br>
<br>Wewnątrz ciała klasy znajdują się pola i metody. Część pól i metod można odpowiednio ukryć przed <br>
<br>"zewnętrznym światem" klasy tak jak to ma miejsce z przedmiotami ze świata rzeczywistego.<br>
<br>Polimorfizm (ang. "polymorphism")<br>
<br> Polimorfizm czyli wielopastaciowość. Oznacza to, że dany obiekt może zmieniać swoją postać w <br>
 <br>zależności od potrzeb. Może to być realizowane w formie metody wywoływanej z różną ilością <br>
<br>parametrów. Tak więc utorzony obiekt może być traktowany polimorficznie bo zachowuje się różnie <br>
<br>w zależności od sposobu uruchamiania jego metody.<br>
       
        </body>
   
   </html>