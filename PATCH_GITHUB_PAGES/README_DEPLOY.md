# Deploy Intentio Nova su GitHub Pages

## Cosa è stato predisposto nei file

- **`.github/workflows/pages.yml`**: workflow GitHub Actions che installa dipendenze, esegue la build del frontend React (CRA + Craco) e pubblica l'output su GitHub Pages
- **`frontend/public/CNAME`**: file CNAME con `www.intentionova.ch` — viene copiato automaticamente nella cartella `build/` durante la build, necessario per il dominio custom
- **`CNAME`** (root del repo): copia di sicurezza del file CNAME per GitHub Pages
- **`PATCH_GITHUB_PAGES/craco.config.js`**: versione semplificata del file di configurazione craco, senza dipendenze private (da copiare in `frontend/craco.config.js` se la build fallisce per moduli mancanti)
- **`PATCH_GITHUB_PAGES/package.json`**: versione del package.json senza il pacchetto privato `@emergentbase/visual-edits` — il workflow lo pulisce automaticamente, ma puoi usarlo come sostituto diretto se preferisci
- Il workflow gestisce automaticamente la rimozione di `@emergentbase/visual-edits` e del file `.npmrc` privato, quindi **non devi fare modifiche manuali ai file prima del commit**

---

## Cosa devi impostare su GitHub

### 1. Crea il repository e carica i file

```
git init
git remote add origin https://github.com/TUO-USER/TUO-REPO.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### 2. Abilita GitHub Pages

1. Vai su **Settings → Pages** del tuo repository
2. Nella sezione **Source**, seleziona: **GitHub Actions**
3. Non selezionare "Deploy from a branch" — deve essere **GitHub Actions**
4. Salva

### 3. Configura il dominio custom

1. Sempre in **Settings → Pages**, nella sezione **Custom domain**
2. Inserisci: `www.intentionova.ch`
3. Clicca **Save**
4. Attiva la checkbox **Enforce HTTPS** (apparirà dopo la verifica DNS)

### 4. Configura DNS del dominio

Sul pannello del tuo provider DNS (dove gestisci intentionova.ch), crea questi record:

| Tipo  | Nome    | Valore                        |
|-------|---------|-------------------------------|
| CNAME | www     | `TUO-USER.github.io`         |

Se vuoi che anche `intentionova.ch` (senza www) funzioni, aggiungi anche i record A:

| Tipo | Nome | Valore            |
|------|------|--------------------|
| A    | @    | `185.199.108.153` |
| A    | @    | `185.199.109.153` |
| A    | @    | `185.199.110.153` |
| A    | @    | `185.199.111.153` |

### 5. Verifica che il workflow parta

1. Dopo il primo push su `main`, vai su **Actions** nel tuo repository
2. Dovresti vedere il workflow "Deploy to GitHub Pages" in esecuzione
3. Attendi che completi (circa 2-3 minuti)
4. Lo stato deve diventare verde ✓

---

## Come verificare il risultato finale

1. Apri: **https://www.intentionova.ch**
2. Se il DNS non è ancora propagato, apri: **https://TUO-USER.github.io/TUO-REPO** (solo se il repo non è TUO-USER.github.io)
3. Il deploy è andato a buon fine se:
   - La pagina si carica con l'hero a schermo intero
   - Il logo Intentio è visibile nell'header
   - Il modulo Brevo in fondo alla pagina è funzionante
   - Tutte le sezioni sono visibili scorrendo

---

## Se qualcosa non funziona

### Dove guardare

- **Actions** → clicca sul workflow fallito → clicca sul job `build` → espandi lo step che ha fallito
- I log mostrano l'errore esatto

### 3 errori più comuni

| Errore | Causa | Soluzione |
|--------|-------|-----------|
| `Module not found: @emergentbase/visual-edits` | Il pacchetto privato non è stato rimosso | Verifica che il workflow contenga lo step "Remove private devDependency". In alternativa, sostituisci `frontend/package.json` con `PATCH_GITHUB_PAGES/package.json` e `frontend/craco.config.js` con `PATCH_GITHUB_PAGES/craco.config.js` |
| `Error: health-check/webpack-health-plugin` | Il plugin health-check non esiste nel repo | Sostituisci `frontend/craco.config.js` con `PATCH_GITHUB_PAGES/craco.config.js` |
| `404 su www.intentionova.ch` | DNS non ancora propagato o CNAME non configurato | Attendi 24-48h per propagazione DNS. Verifica che `frontend/public/CNAME` contenga `www.intentionova.ch`. Verifica che in Settings → Pages il dominio sia impostato |
| `Pagina bianca (no content)` | Build fallita silenziosamente o path sbagliati | Controlla che in Settings → Pages la Source sia "GitHub Actions" (non "Deploy from a branch"). Verifica i log in Actions |

---

## Struttura del repository attesa

```
repo/
├── .github/
│   └── workflows/
│       └── pages.yml          ← workflow di deploy
├── CNAME                       ← dominio custom
├── frontend/
│   ├── public/
│   │   ├── CNAME              ← dominio custom (copiato in build)
│   │   ├── index.html
│   │   └── ...
│   ├── src/                   ← codice React
│   ├── package.json
│   ├── craco.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .npmrc                 ← verrà svuotato dal workflow
└── PATCH_GITHUB_PAGES/        ← file di backup/sostituzione
    ├── .github/workflows/pages.yml
    ├── craco.config.js
    ├── package.json
    └── README_DEPLOY.md
```
