# BioReason: Multimodal Biological Safety & Reasoning Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![Gemini 3](https://img.shields.io/badge/Powered%20by-Gemini%203-4285F4.svg)](https://deepmind.google/technologies/gemini/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

> **"Debug your experiment before you pipe it."**

**BioReason** is an open-source, neuro-symbolic AI agent designed to address the reproducibility crisis in synthetic biology. By leveraging the multimodal reasoning capabilities of **Google Gemini 3**, it performs *in-silico* verification of wet-lab protocols, cross-referencing textual methodology (PDFs) with physical laboratory reality (Images/Video) to detect safety hazards and logical errors in real-time.

---

## 📑 Table of Contents

- [Abstract](#abstract)
- [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage Guide](#usage-guide)
- [The SVAE Engine](#the-svae-engine)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Citation](#citation)

---

## 🔬 Abstract

Experimental failure in the life sciences costs an estimated **$28 billion annually**. A significant portion of this is due to "silent failures"—ambiguities in text protocols or unobserved physical errors (e.g., using a low-salt buffer instead of high-salt). 

BioReason introduces the **Semantic-Visual Alignment Engine (SVAE)**, a framework that treats experimental protocols as executable code and the physical lab bench as the runtime environment. It uses Gemini 3 to parse the "code" (PDF) and "debug" the environment (Vision) to prevent runtime exceptions (ruined experiments).

---

## ✨ Key Features

* **📄 PDF Protocol Parsing:** Extracts reagents, equipment, and step-by-step logic from unstructured scientific papers or internal SOPs.
* **👁️ Computer Vision Auditing:** Analyzes images of lab benches to identify glassware, reagents, and equipment settings (e.g., confirming a heat block is set to 95°C).
* **🧠 Chain-of-Thought Safety Checks:** Simulates chemical interactions between the protocol's requirements and the observed physical inventory to flag exothermic risks or degradation issues.
* **🛡️ Citation-Backed Verification:** All safety warnings are grounded in chemical first principles or cited literature to reduce hallucination.
* **⚡ Real-Time Latency:** Optimized for sub-2-second inference on standard laboratory hardware.

---

## 🏗️ System Architecture

BioReason operates as a split-stack application:

1.  **Ingestion Layer (React):** Handles drag-and-drop of high-resolution lab images and PDF protocols.
2.  **Orchestration Layer (FastAPI):** Manages the session state and prompts.
3.  **Cognitive Layer (Gemini 3):**
    * *Agent A (Parser):* Standardizes text into a JSON "Happy Path."
    * *Agent B (Observer):* Generates a dense caption of the visual input.
    * *Agent C (Adversary):* Attempts to find conflicts between A and B.

---

## 🚀 Installation

### Prerequisites
* Python 3.10+
* Node.js 18+
* Google Cloud Project with **Gemini 1.5 Pro/Flash (or Gemini 3 Preview)** API enabled.

### Backend Setup

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/bioreason.git](https://github.com/your-username/bioreason.git)
    cd bioreason/backend
    ```

2.  Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4.  Configure environment variables:
    ```bash
    cp .env.example .env
    # Edit .env and add your GEMINI_API_KEY
    ```

5.  Run the server:
    ```bash
    uvicorn main:app --reload
    ```

### Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2.  Install packages:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

Visit `http://localhost:3000` to launch the BioReason interface.

---

## 📖 Usage Guide

1.  **Upload Protocol:** Drag and drop your experimental procedure (PDF or `.txt`). The system will parse it and display the "Extracted Logic Steps."
2.  **Upload Context:** Take a photo of your current lab bench setup (reagents, pipettes, machines) and upload it to the "Visual Input" zone.
3.  **Run Audit:** Click **"Verify Safety"**.
4.  **Review Report:**
    * **✅ Green:** Setup matches protocol perfectly.
    * **⚠️ Yellow:** Minor deviation (e.g., "Beaker size optimal but not critical").
    * **🔴 Red:** Critical Safety Hazard (e.g., "Incompatible Reagent detected").

---

## 🧠 The SVAE Engine

The core innovation of BioReason is the **Semantic-Visual Alignment Engine**. It formalizes the verification task as:

$$V(P, I_{obs}) \rightarrow \{S_{safe}, E_{logic}, E_{safety}\}$$

Where the model must prove that the set of observed physical objects $$I_{obs}$$ satisfies the constraints defined in protocol $$P$$. This moves beyond simple object detection into **causal reasoning** about chemical properties.

---

## 🗺️ Roadmap

- [x] **v0.1:** Core PDF parsing and basic visual audit (Hackathon MVP).
- [ ] **v0.2:** Integration with PubChem API for real-time toxicity data lookup.
- [ ] **v0.3:** "Live Mode" support for continuous video monitoring via webcam.
- [ ] **v1.0:** Robot Operating System (ROS2) bridge to stop liquid handlers upon error detection.

---

## 🤝 Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📚 Citation

If you use BioReason in your research, please cite it as follows:

```bibtex
@software{bioreason2026,
  author = {Your Name},
  title = {BioReason: In-Silico Verification of Wet-Lab Protocols via Multimodal LLMs},
  year = {2026},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{[https://github.com/your-username/bioreason](https://github.com/your-username/bioreason)}},
  commit = {main-branch-commit-hash}
}
```
<p align="center"> Built with ❤️ for Science using <a href="https://deepmind.google/technologies/gemini/">Gemini 3</a>. </p>
