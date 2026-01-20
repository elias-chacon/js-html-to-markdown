    function htmlToMarkdown(html) {
        let markdown = html;
        markdown = markdown
            .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
            .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
            .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
            .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n')
            .replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1\n\n')
            .replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1\n\n')
            .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
            .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
            .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
            .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
            .replace(/(\w+)Copy```/g, '```$1')
            .replace(/<pre[^>]*><code[^>]*class="[^"]*language-(\w+)[^"]*"[^>]*>(.*?)<\/code><\/pre>/gis, '```$1\n$2\n```\n')
            .replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gis, '```\n$1\n```\n')
            .replace(/<code[^>]*class="[^"]*language-(\w+)[^"]*"[^>]*>(.*?)<\/code>/gi, '```$1\n$2\n```')
            .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
            .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
            .replace(/<ul[^>]*>/gi, '')
            .replace(/<\/ul>/gi, '\n')
            .replace(/<ol[^>]*>/gi, '')
            .replace(/<\/ol>/gi, '\n')
            .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
            .replace(/<p[^>]*>/gi, '')
            .replace(/<\/p>/gi, '\n\n')
            .replace(/<br[^>]*>/gi, '\n')
            .replace(/<[^>]*>/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/\n{3,}/g, '\n\n')
            .trim();

        markdown = markdown.replaceAll(/(\w+)Copy```/gm, '```$1');
        return markdown;
    }
