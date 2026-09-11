<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return self::projectRules();
    }

    /**
     * Shared validation rules for project create/update.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public static function projectRules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:2000'],
            'tags' => ['required', 'array', 'max:8'],
            'tags.*' => ['required', 'string', 'max:30'],
            'status' => ['required', 'string', 'max:40'],
            'link' => ['nullable', 'url', 'max:255'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:9999'],
            'image' => ['nullable', 'sometimes', 'image', 'mimes:jpg,jpeg,png,webp,avif', 'max:10240'],
        ];
    }
}
