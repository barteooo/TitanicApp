# TitanicApp

Aplikacja przewidująca szanse na przeycie titanica i umozliwiajaca na zapisanie się na rejs

Lokalny steup:

Frontend(web):

1. npm install
2. npm start
3. Zakomentować plik .env
4. localhost:3000

BE do bazy danych(api):

1. instalacja poetry (brew insta poetry na MacOs)
2. w folderze api poetry install (stworzy wirtualne środowisko, które zawiera interpreter kompatybilny ze wszystkim zalenościami w BE)
3. export POSTGRES_USER=postgres
4. export POSTGRES_PASSWORD=1234
5. uvicorn app:app --reload
6. Zakomentować plik .env
7. localhost:8000

Ml-client(ml-client):

1. instalacja poetry (brew insta poetry na MacOs)
2. uvicorn app:app --reload --port 8765
3. localhost:8765

Keycloak (dostępny przez dockera z woluminem):

1. docker compose -d keycloak (będzie dostępny na localhost:8081)
2. localhost:8081/admin/master/console
   2.1 zalogować się na konto admina USER: admin PASSWORD: admin
   2.2 stworzyć Realm o nazwie keycloak-react-auth
   2.3 stworzyć userów wedle potrzeb i nadać im hasła(odznaczyć temporary jezeli haslo nie ma byc tymczasowe)
   2.4 stworzyć clienta o nazwie react-auth-local
   2.5 jako Root URL dać http://localhost:3000/ i nic więcej (zapisać clienta)
   2.6 Wejść w clienta keycloak-react-auth i w Client Scopes
   - 2.6.1 react-auth-docker-dedicated
   - 2.6.2 dodać nowy maper za pomocą By Configuration i z listy dostępnych wybrać opcję User Realm Role
   - 2.6.3 nazwać go (nazwa obojętna)
   - 2.6.4 zaznaczyć opcje Add to ID token i Add to access token
   - 2.6.5 zapisać Mapper
3. Wejść w Realm roles i dodać role o nazwie admin
4. Wejść w uzytkownika ktoremu chcemy nadać admina, wybrać Role mapping i dodać mu rolę admin (admin posiada jedną zakładkę więcej na frontendzie)
5. localhost:8081

Baza danych(dostępna w dockerze):

1. docker-compose -d titanic_db
2. localhost:6666

=========================
Dockerowy setup:

Przed wpisacniem docker-compose up:

1. Upewnić się, ze plik .env w folderze web i api jest odkomentowany
2. docker-compose up
3. Wykonać podpunkt 2 z konfiguracji lokalnej z drobnymi zmianami następujących podpunktów:
   2.4 stworzyc clienta o nazwie react-auth-docker
   2.5 jako Root URL dać http://localhost:3030/ i nic więcej (zapisać clienta)

frontend(web): localhost:3030
BE do bazy danych(api): localhost:6666
keycloak: localhost:8081
ml-client: localhost:8765
baza danych(database): localhost:5432

====================
Klaster Kubernetes: Kontekstem jest docker desktop

1. Folder scripts + sh k8s.sh
2. Podejrzeć w skrypcie na jakie porty są przekierowane konkretne serwisy aby je odtworzyć
3. keycloaka skonfigurować identycznie jak dla punktu 3 z setupu dockerowego.
