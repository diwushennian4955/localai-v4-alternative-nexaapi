"""
LocalAI v4 Alternative: NexaAPI Quick Start
============================================
LocalAI v4 (released March 14, 2026) is a powerful self-hosted AI platform.
But if you want the same models without Docker, GPU, or maintenance overhead,
NexaAPI gives you instant API access starting at $0.003/image.

Get your API key: https://nexa-api.com
PyPI: pip install nexaapi
"""

# Install: pip install nexaapi
from nexaapi import NexaAPI

# Initialize the client with your API key
# Get yours free at: https://nexa-api.com
client = NexaAPI(api_key='YOUR_API_KEY')

# ─────────────────────────────────────────────
# Example 1: Image Generation (same as LocalAI v4 SDXL)
# ─────────────────────────────────────────────
response = client.image.generate(
    model='stable-diffusion-xl',
    prompt='A futuristic cityscape at sunset, photorealistic',
    width=1024,
    height=1024
)

print("Generated image URL:", response.image_url)
# That's it. No Docker. No GPU. No maintenance.

# ─────────────────────────────────────────────
# Example 2: Text Generation (same as LocalAI v4 LLM backends)
# ─────────────────────────────────────────────
text_response = client.text.generate(
    model='llama-3',
    prompt='Explain the benefits of using a managed AI API vs self-hosting LocalAI',
    max_tokens=500
)

print("Generated text:", text_response.text)

# ─────────────────────────────────────────────
# Pricing comparison (as of March 2026)
# ─────────────────────────────────────────────
# LocalAI v4 self-hosted:
#   - Setup: 2-4 hours
#   - GPU server: $50-200/month for 1,000 images
#   - Maintenance: weekly Docker updates
#
# NexaAPI:
#   - Setup: 5 minutes
#   - Cost: $3.00 for 1,000 images ($0.003/image)
#   - Maintenance: none

# ─────────────────────────────────────────────
# Links
# ─────────────────────────────────────────────
# Website:   https://nexa-api.com
# RapidAPI:  https://rapidapi.com/user/nexaquency
# PyPI:      https://pypi.org/project/nexaapi/
# npm:       https://www.npmjs.com/package/nexaapi
# LocalAI:   https://github.com/mudler/LocalAI
