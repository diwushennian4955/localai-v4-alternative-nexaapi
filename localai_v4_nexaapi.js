/**
 * LocalAI v4 Alternative: NexaAPI Quick Start (JavaScript)
 * ==========================================================
 * LocalAI v4 (released March 14, 2026) transforms self-hosted AI with
 * agentic orchestration, React UI, MCP support, and new backends.
 * 
 * But if you want the same models without Docker overhead,
 * NexaAPI gives you instant API access starting at $0.003/image.
 * 
 * Get your API key: https://nexa-api.com
 * npm: npm install nexaapi
 */

// Install: npm install nexaapi
import NexaAPI from 'nexaapi';

// Initialize the client
// Get your free API key at: https://nexa-api.com
const client = new NexaAPI({ apiKey: 'YOUR_API_KEY' });

async function main() {
  // ─────────────────────────────────────────────
  // Example 1: Image Generation (same as LocalAI v4 SDXL)
  // ─────────────────────────────────────────────
  const imageResponse = await client.image.generate({
    model: 'stable-diffusion-xl',
    prompt: 'A futuristic cityscape at sunset, photorealistic',
    width: 1024,
    height: 1024
  });

  console.log('Generated image URL:', imageResponse.imageUrl);
  // Zero infrastructure. Instant API access.

  // ─────────────────────────────────────────────
  // Example 2: Text Generation (same as LocalAI v4 LLM backends)
  // ─────────────────────────────────────────────
  const textResponse = await client.text.generate({
    model: 'llama-3',
    prompt: 'Explain the benefits of using a managed AI API vs self-hosting LocalAI',
    maxTokens: 500
  });

  console.log('Generated text:', textResponse.text);
}

main().catch(console.error);

/**
 * Pricing comparison (as of March 2026):
 * 
 * LocalAI v4 self-hosted:
 *   - Setup: 2-4 hours
 *   - GPU server: $50-200/month for 1,000 images
 *   - Maintenance: weekly Docker updates
 * 
 * NexaAPI:
 *   - Setup: 5 minutes
 *   - Cost: $3.00 for 1,000 images ($0.003/image)
 *   - Maintenance: none
 * 
 * Links:
 *   Website:   https://nexa-api.com
 *   RapidAPI:  https://rapidapi.com/user/nexaquency
 *   PyPI:      https://pypi.org/project/nexaapi/
 *   npm:       https://www.npmjs.com/package/nexaapi
 *   LocalAI:   https://github.com/mudler/LocalAI
 */
