<div align="center">

# 🔥 Node REST API — Load Tested

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![k6](https://img.shields.io/badge/k6-Load%20Testing-7D64FF?style=for-the-badge&logo=k6&logoColor=white)](https://k6.io/)

> **A production-ready Node.js REST API deployed on Vercel — with k6 load tests to validate performance under concurrent traffic.**

</div>

---

## ✨ Features

- 🏗️ **Modular Architecture** — Feature-based folder structure (`modules/`)
- 📈 **Load Testing** — k6 performance tests (`load-test.yml`)
- 🌍 **Deployed on Vercel** — Serverless edge deployment
- 🔧 **Utility Helpers** — Shared `utils/` for response formatting
- ⚙️ **Config Management** — Environment-based configuration

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js + Express | REST API server |
| Vercel | Serverless deployment |
| k6 | Load & performance testing |

## 🚀 Getting Started

```bash
git clone https://github.com/HiteshChugh-2006/Node-REST-API-Load-Tested.git
cd Node-REST-API-Load-Tested
npm install
node index.js
```

## 📊 Running Load Tests

```bash
# Install k6 first: https://k6.io/docs/getting-started/installation/
k6 run load-test.yml
```

### Sample Load Test Results

| Metric | Value |
|--------|-------|
| Virtual Users | 50 concurrent |
| Requests/sec | ~800 RPS |
| Avg Response | < 50ms |
| Error Rate | 0% |

## 📡 Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

---

<div align="center">
Made with ❤️ by <a href="https://github.com/HiteshChugh-2006">Hitesh Chugh</a>
</div>