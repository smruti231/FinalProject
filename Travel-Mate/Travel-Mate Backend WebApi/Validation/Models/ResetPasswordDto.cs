using System.ComponentModel.DataAnnotations;

public class ResetPasswordDto
    {
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MinLength(6)]
    public string NewPassword { get; set; } = string.Empty;

    [Required]
    [MinLength(6)]
    public string ConfirmNewPassword { get; set; } = string.Empty;
    }