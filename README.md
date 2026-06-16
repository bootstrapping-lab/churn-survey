# Churn Survey

Interactive customer research survey for the churn prediction product.

## Live URLs

- **English**: [https://bootstrapping-lab.github.io/churn-survey/](https://bootstrapping-lab.github.io/churn-survey/)
- **Español**: [https://bootstrapping-lab.github.io/churn-survey/es/](https://bootstrapping-lab.github.io/churn-survey/es/)

> **Note:** GitHub Pages may take 1-3 minutes to build after the first push.

## Google Sheets Backend Setup

### Step 1: Open the Apps Script editor
1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1OS0acuOnEivnlWMZFfafAJoXIRTeyNnkxh9Bq6KfTrg/edit
2. Go to **Extensions → Apps Script**
3. Delete the default `Code.gs` content

### Step 2: Paste the backend code
1. Open `google-apps-script.js` in this repo
2. Paste it entirely into the Apps Script editor
3. Click **Save** (disk icon)

### Step 3: Deploy as a Web App
1. Click **Deploy → New deployment**
2. Choose **Web app** as the type
3. Configure:
   - **Description**: `churn-survey-backend`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Click **Deploy** and copy the **Web App URL**

### Step 4: Update the survey
1. Edit `index.html` and `es/index.html`
2. Find: `const GS_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';`
3. Replace `YOUR_DEPLOYMENT_ID` with your actual deployment ID
4. Commit and push — Pages will redeploy automatically

## Survey Structure

| Step | Framework | Purpose |
|------|-----------|---------|
| 1 | Screening | Qualify respondents |
| 2 | Problem Discovery | Map real pain points |
| 3 | Jobs-to-be-Done | Current approach + desired outcome |
| 4 | Concept Reveal | Test solution interest |
| 5 | Van Westendorp | 4 pricing threshold sliders |
| 6 | Sean Ellis PMF | Disappointment test |
| 7 | Segmentation | Team size, ARR |
| 8 | Completion | Email, JSON, POST to backend |

## Response Columns

Timestamp, Role, Customers, DataHistory, ChurnFrequency, ChurnRate, Blockers,
CurrentApproach, DreamOutcome, Interest, Objection, PriceTooCheap,
PriceGoodValue, PriceExpensive, PriceTooExpensive, SeanEllis, Alternative,
TeamSize, ARR, OtherFeedback, Email, Lang
